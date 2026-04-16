import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.formData();
	const name = data.get('name') as string;
	const email = data.get('email') as string;
	const phone = data.get('phone') as string;
	const message = data.get('message') as string;

	if (!name || !email || !message) {
		return new Response(JSON.stringify({ error: 'Missing required fields' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	// Validate email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return new Response(JSON.stringify({ error: 'Invalid email address' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
		// Import Resend API key from environment
		const privateEnv = await import('$env/dynamic/private');
		const RESEND_API_KEY = privateEnv.env.RESEND_API_KEY;

		if (!RESEND_API_KEY) {
			console.error('RESEND_API_KEY not configured');
			return new Response(JSON.stringify({ error: 'Email service not configured' }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		const emailHtml = `
			<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
				<div style="background: #0c2340; color: white; padding: 20px; text-align: center;">
					<h1 style="color: #fbc408; margin: 0;">GroverLawKC</h1>
					<p style="color: #9b9b9b; margin: 5px 0 0;">New Case Inquiry</p>
				</div>
				<div style="padding: 30px; background: #f9f9f9;">
					<h2 style="color: #0c2340;">Contact Details</h2>
					<table style="width: 100%; border-collapse: collapse;">
						<tr>
							<td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
							<td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
						</tr>
						<tr>
							<td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
							<td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
						</tr>
						<tr>
							<td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
							<td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
						</tr>
					</table>
					<h2 style="color: #0c2340; margin-top: 20px;">Case Description</h2>
					<div style="background: white; padding: 15px; border-left: 4px solid #c99700; border-radius: 0 4px 4px 0;">
						<p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
					</div>
				</div>
				<div style="background: #0c2340; color: #9b9b9b; padding: 15px; text-align: center; font-size: 12px;">
					Submitted from groverlawkc.com contact form
				</div>
			</div>
		`;

		const res = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${RESEND_API_KEY}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				from: 'GroverLawKC Contact Form <noreply@groverlawkc.com>',
				to: ['info@groverlawkc.com'],
				reply_to: email,
				subject: `New Case Inquiry from ${name}`,
				html: emailHtml
			})
		});

		if (!res.ok) {
			const errorData = await res.text();
			console.error('Resend API error:', errorData);
			return new Response(JSON.stringify({ error: 'Failed to send message. Please call us directly.' }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error('Contact form error:', err);
		return new Response(JSON.stringify({ error: 'An unexpected error occurred' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
