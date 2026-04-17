export interface TeamMember {
	slug: string;
	name: string;
	role: string;
	photo: string;
	bio: string;
	education?: string[];
	barAdmissions?: string[];
	affiliations?: string[];
	awards?: string[];
	isAttorney: boolean;
}

export const team: TeamMember[] = [
	{
		slug: 'mark-grover',
		name: 'Mark Grover',
		role: 'Founder & Attorney',
		photo: '/images/team/mark-grover.jpg',
		bio: `Mark Grover is the founder of GroverLawKC Injury & Accident Lawyers and brings more than 21 years of experience practicing law. Before founding GroverLawKC, Mark honed his skills at a large multi-state firm and served in the legal departments of two Fortune 500 companies — experience that gives him a unique understanding of how corporations and insurance companies think, negotiate, and fight claims.

As a Kansas City native, Mark understands the roads, the courts, and the insurance companies that operate here. He uses that knowledge every day to advocate for accident victims and their families throughout the metro area. His approach is straightforward: treat every client like family, investigate every case thoroughly, and never back down when insurance companies try to lowball a settlement.

Mark also serves as Vice President of the Board of Directors for the Strive for Life Foundation and participates in mentorship through Big Brother Big Sister of Kansas City's Kaufman program. He is passionate about giving back to the Kansas City community that has supported him throughout his career.

His four consecutive "Best Injury Lawyer in Kansas City" awards reflect what his clients already know: Mark Grover fights and wins.`,
		education: [
			'J.D., University of Arkansas Little Rock School of Law',
			'B.A. in Political Science, Fort Hays State University',
			'National College of DUI Defense, Harvard Law School'
		],
		barAdmissions: [
			'State Bar of Kansas',
			'State Bar of Missouri',
			'United States District Court for the District of Kansas'
		],
		affiliations: [
			'Johnson County Bar Association',
			'Kansas City Metropolitan Bar Association',
			'Business Networking International (since 2009)',
			'Legal Counsel, Student Legal Services at KU Medical Center'
		],
		awards: [
			'Best Personal Injury Attorney — Best of Kansas City 2022–2025',
			'Top 100 National Trial Lawyers',
			'Runner-Up, Best DUI Attorney — Best of Kansas City 2021'
		],
		isAttorney: true
	},
	{
		slug: 'clay-karpowich',
		name: 'Clay Karpowich',
		role: 'Attorney',
		photo: '/images/team/clay-karpowich.jpg',
		bio: `Clay Karpowich is an attorney at GroverLawKC, licensed to practice in both Kansas and Missouri. He earned his Juris Doctor from the University of Kansas School of Law in 2023 and his bachelor's degree in business administration from Kansas State University in 2020.

Clay brings a sharp analytical mind and a genuine passion for helping injury victims navigate the legal system. His business background gives him a practical understanding of the financial pressures that injured clients face — from mounting medical bills to lost wages — and he works diligently to maximize every client's recovery.`,
		education: [
			'J.D., University of Kansas School of Law (2023)',
			'B.A. in Business Administration, Kansas State University (2020)'
		],
		barAdmissions: [
			'State Bar of Kansas',
			'State Bar of Missouri'
		],
		isAttorney: true
	},
	{
		slug: 'patricia-dixon',
		name: 'Patricia Dixon',
		role: 'Senior Case Manager',
		photo: '/images/team/patricia-dixon.jpg',
		bio: `Patricia Dixon is the Senior Case Manager at GroverLawKC and a Kansas City native. A graduate of Turner High School, Patricia has deep roots in the community and brings decades of professional experience to the firm.

Patricia has been married for over 30 years and raised two children — Austin and Autumn — in Stilwell, Kansas. She focuses exclusively on personal injury cases at GroverLawKC, managing the details and timeline of each case so that clients can focus on their recovery. Her organizational skills and compassionate approach make her an invaluable part of the team.`,
		isAttorney: false
	},
	{
		slug: 'kayla-bebie',
		name: 'Kayla Bebie',
		role: 'Executive Operations Manager',
		photo: '/images/team/kayla-bebie.jpg',
		bio: `Kayla Bebie is the Executive Operations Manager at GroverLawKC, bringing over 10 years of customer service experience and 2 years of case management experience to the role. Although GroverLawKC is her first position in the legal field, Kayla has quickly become essential to the firm's daily operations.

Her focus on problem-solving and operational efficiency ensures that the firm runs smoothly and that clients receive responsive, organized service from their first call through case resolution.`,
		isAttorney: false
	},
	{
		slug: 'leo-prieto',
		name: 'Leo Prieto',
		role: 'Director of Client Operations',
		photo: '/images/team/leo-prieto.jpg',
		bio: `Leo Prieto serves as Director of Client Operations at GroverLawKC. A bilingual professional, Leo brings expertise in public affairs, marketing, public speaking, media relations, and community empowerment to the firm.

Leo plays a critical role in connecting GroverLawKC with the diverse communities of the Kansas City metro area. His background in sports and entertainment, combined with his passion for community engagement, helps ensure that every client feels welcomed and supported throughout the legal process.`,
		isAttorney: false
	},
	{
		slug: 'selene-gresco',
		name: 'Selene Gresco',
		role: 'Case Manager',
		photo: '/images/team/selene-gresco.jpg',
		bio: `Selene Gresco joined GroverLawKC in 2022 as a Case Manager. As a native Spanish speaker, Selene is committed to supporting Hispanic clients and removing language barriers throughout the legal process.

Her dedication to client communication and her ability to bridge cultural gaps make her an essential member of the team. Selene ensures that Spanish-speaking clients receive the same thorough, compassionate representation that GroverLawKC is known for.`,
		isAttorney: false
	},
	{
		slug: 'america-reyes',
		name: 'America Reyes',
		role: 'Administrative Assistant',
		photo: '/images/team/america-reyes.jpg',
		bio: `America Reyes is an Administrative Assistant at GroverLawKC, bringing more than 3 years of customer service experience and a genuine passion for helping others. America helps bridge connections between the firm and the Hispanic community in the Kansas City metro.

Outside of work, America enjoys traveling, spending time with family, and caring for her dogs Luna and Rex.`,
		isAttorney: false
	},
	{
		slug: 'joseph-skojac',
		name: 'Joseph Skojac',
		role: 'Law Clerk',
		photo: '/images/team/joseph-skojac.jpg',
		bio: `Joseph Skojac is a Law Clerk at GroverLawKC who recently relocated to Kansas City after nine years of distinguished service in the United States Coast Guard. Joseph earned his bachelor's degree from the University of Central Florida and currently attends UMKC School of Law.

His military background instilled discipline, attention to detail, and a commitment to service — qualities that translate directly into effective legal research and client advocacy.`,
		education: [
			'J.D. Candidate, UMKC School of Law',
			'B.A., University of Central Florida'
		],
		isAttorney: false
	},
	{
		slug: 'tony-quinn',
		name: 'Tony Quinn',
		role: 'Law Student',
		photo: '/images/team/tony-quinn.jpg',
		bio: `Tony Quinn is a Law Student at GroverLawKC and a Kansas City native. He is currently attending UMKC School of Law and earned his undergraduate degree in Political Science from Emporia State University.

Tony is passionate about client advocacy and is driven by a desire to help people during some of the most difficult times in their lives.`,
		education: [
			'J.D. Candidate, UMKC School of Law',
			'B.A. in Political Science, Emporia State University'
		],
		isAttorney: false
	},
	{
		slug: 'westley-grover',
		name: 'Westley Grover',
		role: 'Chief Culture Officer',
		photo: '/images/team/westley-grover.webp',
		bio: `Westley Grover serves as the Chief Culture Officer of GroverLawKC. His philosophy is simple: "Lead with kindness, be patient, quietly pay attention, always wag — rarely bark."

Westley had a difficult start in life but found a permanent home with Mark Grover. He now spends his days reminding the team and visitors alike that a warm welcome goes a long way. Clients frequently note that Westley's presence helps put them at ease during an otherwise stressful time.`,
		isAttorney: false
	}
];
