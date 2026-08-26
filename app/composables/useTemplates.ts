import type { TemplatePreset } from '~/types/builder'

export const TEMPLATE_PRESETS: TemplatePreset[] = [
	{
		id: 'saas-landing',
		title: 'SaaS Modern Landing',
		description: 'Complete high-converting SaaS landing page with hero, features grid, stats, pricing, and footer.',
		category: 'Landing Page',
		thumbnailIcon: 'lucide:rocket',
		elements: [
			{
				id: 'el-hero-1',
				type: 'page-hero',
				props: {
					headline: '🚀 Nuxt 4 & Nuxt UI v4 Ready',
					title: 'Ship Modern Vue Applications 10x Faster',
					description: 'Build polished web interfaces with drag and drop simplicity, powered by accessible Nuxt UI components and instant code generation.',
					orientation: 'vertical',
					primaryBtnText: 'Start Building Free',
					secondaryBtnText: 'View Examples',
					primaryBtnIcon: 'lucide:sparkles',
					secondaryBtnIcon: 'lucide:external-link',
					highlight: true,
				},
				styles: {
					padding: 'py-20 px-6',
					width: 'w-full',
				},
			},
			{
				id: 'el-stat-container',
				type: 'container',
				props: {},
				styles: {
					maxWidth: 'max-w-7xl',
					padding: 'py-8 px-6',
					margin: 'mx-auto',
				},
				children: [
					{
						id: 'el-stat-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-3',
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-3',
							gap: 'gap-6',
							width: 'w-full',
						},
						children: [
							{
								id: 'el-stat-1',
								type: 'page-card',
								props: {
									title: '120,000+ Developers',
									description: 'Active engineers building modern apps monthly across 85+ countries.',
									icon: 'lucide:users',
									variant: 'subtle',
									highlight: true,
								},
								styles: {
									padding: 'p-6',
									width: 'w-full',
								},
							},
							{
								id: 'el-stat-2',
								type: 'page-card',
								props: {
									title: '4.8M Components Rendered',
									description: 'High-speed UI generation powered by Tailwind CSS v4 and Reka UI.',
									icon: 'lucide:cpu',
									variant: 'subtle',
									highlight: true,
								},
								styles: {
									padding: 'p-6',
									width: 'w-full',
								},
							},
							{
								id: 'el-stat-3',
								type: 'page-card',
								props: {
									title: '99.99% Production Uptime',
									description: 'Enterprise grade reliability with edge SSR and zero-overhead styles.',
									icon: 'lucide:cloud-upload',
									variant: 'subtle',
									highlight: true,
								},
								styles: {
									padding: 'p-6',
									width: 'w-full',
								},
							},
						],
					},
				],
			},
			{
				id: 'el-feat-container',
				type: 'container',
				props: {},
				styles: {
					maxWidth: 'max-w-7xl',
					padding: 'py-16 px-6',
					margin: 'mx-auto',
				},
				children: [
					{
						id: 'el-feat-heading',
						type: 'heading',
						props: {
							text: 'Engineered for Exceptional Developer Experience',
							as: 'h2',
							highlight: true,
						},
						styles: {
							textAlign: 'center',
							margin: 'mb-4',
						},
					},
					{
						id: 'el-feat-sub',
						type: 'paragraph',
						props: {
							text: 'Everything you need to craft responsive, accessible and blazing fast interfaces with Vue 3 and Tailwind CSS v4.',
							size: 'lg',
						},
						styles: {
							textAlign: 'center',
							margin: 'mb-10 max-w-2xl mx-auto',
						},
					},
					{
						id: 'el-feat-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-3',
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-3',
							gap: 'gap-6',
							width: 'w-full',
						},
						children: [
							{
								id: 'el-feat-1',
								type: 'feature-card',
								props: {
									title: 'Tailwind CSS v4 Engine',
									description: 'Zero runtime overhead with ultra-fast compilation and custom CSS variable tokens.',
									icon: 'lucide:zap',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
							{
								id: 'el-feat-2',
								type: 'feature-card',
								props: {
									title: 'Reka UI Headless Core',
									description: 'Fully WAI-ARIA accessible primitives with keyboard navigation and screen-reader support out of the box.',
									icon: 'lucide:shield-check',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
							{
								id: 'el-feat-3',
								type: 'feature-card',
								props: {
									title: 'Production Vue SFC Export',
									description: 'Export clean, readable Vue Single File Components with TypeScript types ready to paste into your Nuxt project.',
									icon: 'lucide:code-2',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
						],
					},
				],
			},
			{
				id: 'el-pricing-container',
				type: 'container',
				props: {},
				styles: {
					maxWidth: 'max-w-7xl',
					padding: 'py-16 px-6',
					margin: 'mx-auto',
				},
				children: [
					{
						id: 'el-pricing-heading',
						type: 'heading',
						props: {
							text: 'Flexible Pricing for Every Scale',
							as: 'h2',
						},
						styles: {
							textAlign: 'center',
							margin: 'mb-4',
						},
					},
					{
						id: 'el-pricing-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-3',
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-3',
							gap: 'gap-6',
							width: 'w-full',
							margin: 'mt-8',
						},
						children: [
							{
								id: 'el-price-starter',
								type: 'pricing-card',
								props: {
									plan: 'Starter Plan',
									badge: 'Free Forever',
									price: '$0',
									period: '/month',
									description: 'Perfect for exploring and building personal side projects.',
									buttonText: 'Start for Free',
									featured: false,
									features: '3 Active Projects,Standard Nuxt UI components,Community Discord,Basic code export',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
							{
								id: 'el-price-pro',
								type: 'pricing-card',
								props: {
									plan: 'Pro Studio',
									badge: 'Most Popular',
									price: '$29',
									period: '/month',
									description: 'Designed for freelance developers and high-velocity product teams.',
									buttonText: 'Upgrade to Pro',
									featured: true,
									features: 'Unlimited projects,Nuxt 4 code & JSON export,All prebuilt sections,Custom theme designer,Priority GitHub support',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
							{
								id: 'el-price-team',
								type: 'pricing-card',
								props: {
									plan: 'Enterprise',
									badge: 'Custom',
									price: '$99',
									period: '/month',
									description: 'For organizations needing dedicated infrastructure and SLA support.',
									buttonText: 'Contact Sales',
									featured: false,
									features: 'Unlimited team members,Dedicated design system sync,Custom component registry,SSO & audit logs,Dedicated account manager',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
						],
					},
				],
			},
			{
				id: 'el-footer-1',
				type: 'footer-section',
				props: {
					brandName: 'NuxtUI Builder',
					tagline: 'Visual UI builder for Vue 3 and the modern Nuxt ecosystem.',
					copyright: '© 2026 NuxtUI Studio. Built with Nuxt 4 & @nuxt/ui.',
				},
				styles: {
					padding: 'py-12 px-6',
					width: 'w-full',
				},
			},
		],
	},
	{
		id: 'pricing-page',
		title: 'Pricing & Testimonials',
		description: 'Focused pricing comparison layout with customer testimonials and FAQ banner.',
		category: 'Pricing',
		thumbnailIcon: 'lucide:credit-card',
		elements: [
			{
				id: 'el-p-hero',
				type: 'page-hero',
				props: {
					headline: 'Simple, Transparent Pricing',
					title: 'Invest in Faster Delivery',
					description: 'No hidden fees. Switch or cancel anytime. All plans include full access to component libraries and visual builder.',
					orientation: 'vertical',
					primaryBtnText: 'Get Started with Free Trial',
					secondaryBtnText: 'Compare Plans',
					primaryBtnIcon: 'lucide:arrow-right',
					secondaryBtnIcon: 'lucide:list-ordered',
					highlight: true,
				},
				styles: {
					padding: 'py-16 px-6',
					width: 'w-full',
				},
			},
			{
				id: 'el-p-container',
				type: 'container',
				props: {},
				styles: {
					maxWidth: 'max-w-7xl',
					padding: 'py-8 px-6',
					margin: 'mx-auto',
				},
				children: [
					{
						id: 'el-p-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-3',
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-3',
							gap: '6',
							width: 'w-full',
						},
						children: [
							{
								id: 'el-p-card-1',
								type: 'pricing-card',
								props: {
									plan: 'Starter',
									badge: 'Free',
									price: '$0',
									period: '/month',
									description: 'Essential toolkit for personal projects and prototypes.',
									buttonText: 'Get Started',
									featured: false,
									features: 'Up to 5 builder projects,Full Nuxt UI library,Community support,Vue SFC export',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
							{
								id: 'el-p-card-2',
								type: 'pricing-card',
								props: {
									plan: 'Professional',
									badge: 'Popular',
									price: '$49',
									period: '/month',
									description: 'Full power for production websites and team projects.',
									buttonText: 'Start Pro Trial',
									featured: true,
									features: 'Unlimited projects,Advanced layout engine,Export Nuxt Content MDC,Custom brand palettes,Team collaboration',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
							{
								id: 'el-p-card-3',
								type: 'pricing-card',
								props: {
									plan: 'Enterprise',
									badge: 'Scale',
									price: '$199',
									period: '/month',
									description: 'Custom components, security SLA, and dedicated onboarding.',
									buttonText: 'Talk to Team',
									featured: false,
									features: 'Custom design tokens,Private component registry,Role-based access,99.99% uptime SLA,Dedicated support channel',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
						],
					},
				],
			},
			{
				id: 'el-testi-container',
				type: 'container',
				props: {},
				styles: {
					maxWidth: 'max-w-7xl',
					padding: 'py-12 px-6',
					margin: 'mx-auto',
				},
				children: [
					{
						id: 'el-testi-heading',
						type: 'heading',
						props: {
							text: 'Loved by Developers Worldwide',
							as: 'h2',
						},
						styles: {
							textAlign: 'center',
							margin: 'mb-8',
						},
					},
					{
						id: 'el-testi-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-2',
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-2',
							gap: 'gap-6',
							width: 'w-full',
						},
						children: [
							{
								id: 'el-testi-1',
								type: 'testimonial-card',
								props: {
									quote: 'The Nuxt UI builder saved us hundreds of engineering hours. We designed our entire dashboard mockup and exported clean Vue code directly!',
									author: 'Alex Rivera',
									role: 'Lead Architect @ DevStudio',
									avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
							{
								id: 'el-testi-2',
								type: 'testimonial-card',
								props: {
									quote: 'Nuxt 4 + Nuxt UI v4 feels so intuitive. Having a visual builder with real-time properties and instant Vue code generation is game-changing.',
									author: 'Marcus Chen',
									role: 'Founder @ StackPulse',
									avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
						],
					},
				],
			},
			{
				id: 'el-p-cta',
				type: 'page-cta',
				props: {
					headline: 'Get Started Today',
					title: 'Ready to Accelerate Your Nuxt Development?',
					description: 'Join thousands of creators and product teams building with Builder Nuxt UI.',
					primaryBtnText: 'Start Free Trial',
					variant: 'subtle',
				},
				styles: {
					padding: 'py-12 px-6',
					width: 'w-full',
				},
			},
		],
	},
	{
		id: 'dashboard-preview',
		title: 'Analytics Dashboard',
		description: 'Modern administrative dashboard with stats, interactive alerts, form controls, and cards.',
		category: 'Dashboard',
		thumbnailIcon: 'lucide:layout-dashboard',
		elements: [
			{
				id: 'el-dash-container',
				type: 'container',
				props: {},
				styles: {
					maxWidth: 'max-w-7xl',
					padding: 'p-6',
					margin: 'mx-auto',
				},
				children: [
					{
						id: 'el-dash-alert',
						type: 'alert',
						props: {
							title: 'System Performance Optimal',
							description: 'All 24 worker nodes are operating at 99.98% efficiency with zero reported latency spikes.',
							icon: 'lucide:check-circle-2',
							color: 'success',
							variant: 'subtle',
						},
						styles: {
							margin: 'mb-6',
							width: 'w-full',
						},
					},
					{
						id: 'el-dash-stat-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-3',
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-3',
							gap: 'gap-6',
							width: 'w-full',
							margin: 'mb-8',
						},
						children: [
							{
								id: 'el-d-stat-1',
								type: 'page-card',
								props: {
									title: '$84,230 MRR',
									description: '+14.5% revenue growth compared to previous billing cycle.',
									icon: 'lucide:dollar-sign',
									variant: 'subtle',
									highlight: true,
								},
								styles: { padding: 'p-5', width: 'w-full' },
							},
							{
								id: 'el-d-stat-2',
								type: 'page-card',
								props: {
									title: '12.4M API Requests',
									description: 'Average response time 24ms across global Edge network.',
									icon: 'lucide:activity',
									variant: 'subtle',
									highlight: true,
								},
								styles: { padding: 'p-5', width: 'w-full' },
							},
							{
								id: 'el-d-stat-3',
								type: 'page-card',
								props: {
									title: '4.82% Conversion Rate',
									description: '+0.6% improvement following landing page optimization.',
									icon: 'lucide:target',
									variant: 'subtle',
									highlight: true,
								},
								styles: { padding: 'p-5', width: 'w-full' },
							},
						],
					},
					{
						id: 'el-dash-card-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-2',
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-2',
							gap: 'gap-6',
							width: 'w-full',
						},
						children: [
							{
								id: 'el-d-card-1',
								type: 'card',
								props: {
									headerText: 'Quick Configuration',
									showHeader: true,
									variant: 'outline',
								},
								styles: { padding: 'p-6', width: 'w-full' },
								children: [
									{
										id: 'el-d-switch-1',
										type: 'switch',
										props: {
											label: 'Automatic Edge Caching',
											description: 'Cache static assets at global cloud edge locations',
											defaultValue: true,
											color: 'primary',
										},
										styles: { margin: 'mb-4' },
									},
									{
										id: 'el-d-slider-1',
										type: 'slider',
										props: {
											defaultValue: 80,
											color: 'primary',
										},
										styles: { margin: 'mb-4', width: 'w-full' },
									},
									{
										id: 'el-d-btn-1',
										type: 'button',
										props: {
											label: 'Save Configuration',
											color: 'primary',
											variant: 'solid',
											icon: 'lucide:save',
										},
										styles: { margin: 'mt-4' },
									},
								],
							},
							{
								id: 'el-d-card-2',
								type: 'card',
								props: {
									headerText: 'Live Bandwidth Usage',
									showHeader: true,
									variant: 'outline',
								},
								styles: { padding: 'p-6', width: 'w-full' },
								children: [
									{
										id: 'el-d-prog-1',
										type: 'progress',
										props: {
											value: 78,
											status: true,
											color: 'primary',
										},
										styles: { margin: 'mb-6', width: 'w-full' },
									},
									{
										id: 'el-d-para-1',
										type: 'paragraph',
										props: {
											text: '780 GB of 1000 GB used this billing period. Next reset in 6 days.',
											size: 'sm',
										},
										styles: { margin: 'mb-4' },
									},
									{
										id: 'el-d-btn-2',
										type: 'button',
										props: {
											label: 'Upgrade Capacity',
											color: 'neutral',
											variant: 'outline',
											icon: 'lucide:arrow-up-right',
										},
										styles: {},
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		id: 'school',
		title: 'School & Academy Landing',
		description: 'Modern educational institution landing page with hero, academic programs, facilities, and registration CTA.',
		category: 'Education',
		thumbnailIcon: 'lucide:graduation-cap',
		elements: [
			{
				id: 'el-sch-hero',
				type: 'page-hero',
				props: {
					headline: '🎓 Admissions Open for Academic Year 2026/2027',
					title: 'Empowering Future Leaders Through Excellence & Character',
					description: 'A forward-thinking academy offering integrated STEM curricula, smart digital classrooms, certified global educators, and holistic student development.',
					orientation: 'vertical',
					primaryBtnText: 'Apply for Admission',
					secondaryBtnText: 'Download Prospectus',
					primaryBtnIcon: 'lucide:user-plus',
					secondaryBtnIcon: 'lucide:download',
					highlight: true,
				},
				styles: {
					padding: 'py-20 px-6',
					width: 'w-full',
				},
			},
			{
				id: 'el-sch-stat-container',
				type: 'container',
				props: {},
				styles: {
					maxWidth: 'max-w-7xl',
					padding: 'py-8 px-6',
					margin: 'mx-auto',
				},
				children: [
					{
						id: 'el-sch-stat-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-3',
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-3',
							gap: 'gap-6',
							width: 'w-full',
						},
						children: [
							{
								id: 'el-sch-stat-1',
								type: 'page-card',
								props: {
									title: '1,500+ Active Students',
									description: 'Over 120 regional and national awards across science, robotics, and arts.',
									icon: 'lucide:award',
									variant: 'subtle',
									highlight: true,
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
							{
								id: 'el-sch-stat-2',
								type: 'page-card',
								props: {
									title: '98% University Placement',
									description: 'Graduates accepted into leading national and international universities.',
									icon: 'lucide:graduation-cap',
									variant: 'subtle',
									highlight: true,
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
							{
								id: 'el-sch-stat-3',
								type: 'page-card',
								props: {
									title: 'Grade A Accreditation',
									description: 'State-of-the-art facilities, modern science laboratories, and inclusive learning spaces.',
									icon: 'lucide:shield-check',
									variant: 'subtle',
									highlight: true,
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
						],
					},
				],
			},
			{
				id: 'el-sch-prog-container',
				type: 'container',
				props: {},
				styles: {
					maxWidth: 'max-w-7xl',
					padding: 'py-16 px-6',
					margin: 'mx-auto',
				},
				children: [
					{
						id: 'el-sch-prog-heading',
						type: 'heading',
						props: {
							text: 'Signature Academic & Leadership Programs',
							as: 'h2',
							highlight: true,
						},
						styles: {
							textAlign: 'center',
							margin: 'mb-4',
						},
					},
					{
						id: 'el-sch-prog-sub',
						type: 'paragraph',
						props: {
							text: 'A well-rounded educational pathway combining digital technology, global languages, analytical research, and character formation.',
							size: 'lg',
						},
						styles: {
							textAlign: 'center',
							margin: 'mb-10 max-w-2xl mx-auto',
						},
					},
					{
						id: 'el-sch-prog-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-3',
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-3',
							gap: 'gap-6',
							width: 'w-full',
						},
						children: [
							{
								id: 'el-sch-feat-1',
								type: 'feature-card',
								props: {
									title: 'Modern STEM Curriculum',
									description: 'Project-based discovery, fundamental coding, robotics, and practical laboratory experimentation.',
									icon: 'lucide:laptop',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
							{
								id: 'el-sch-feat-2',
								type: 'feature-card',
								props: {
									title: 'Bilingual & Global Languages',
									description: 'Immersive English and Mandarin instruction delivered by certified native-level educators.',
									icon: 'lucide:globe',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
							{
								id: 'el-sch-feat-3',
								type: 'feature-card',
								props: {
									title: '25+ Extracurricular Clubs',
									description: 'Comprehensive student activities spanning competitive sports, music, debate, and leadership councils.',
									icon: 'lucide:trophy',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
						],
					},
				],
			},
			{
				id: 'el-sch-fac-container',
				type: 'container',
				props: {},
				styles: {
					maxWidth: 'max-w-7xl',
					padding: 'py-12 px-6',
					margin: 'mx-auto',
				},
				children: [
					{
						id: 'el-sch-fac-heading',
						type: 'heading',
						props: {
							text: 'Campus Facilities & Learning Spaces',
							as: 'h2',
						},
						styles: {
							textAlign: 'center',
							margin: 'mb-8',
						},
					},
					{
						id: 'el-sch-fac-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-3',
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-3',
							gap: 'gap-6',
							width: 'w-full',
						},
						children: [
							{
								id: 'el-sch-fac-1',
								type: 'page-card',
								props: {
									title: 'Smart Digital Classrooms',
									description: 'Equipped with interactive touchscreen displays, high-speed campus fiber, and digital learning suites.',
									icon: 'lucide:screen-share',
									variant: 'outline',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
							{
								id: 'el-sch-fac-2',
								type: 'page-card',
								props: {
									title: 'Science & Computer Labs',
									description: 'Industry-standard equipment for physics, chemistry, biology, and software development research.',
									icon: 'lucide:flask-conical',
									variant: 'outline',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
							{
								id: 'el-sch-fac-3',
								type: 'page-card',
								props: {
									title: 'Library & Athletics Complex',
									description: 'Extensive physical and digital book archives, indoor gymnasium, and multi-purpose sports fields.',
									icon: 'lucide:book-open',
									variant: 'outline',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
						],
					},
				],
			},
			{
				id: 'el-sch-testi-container',
				type: 'container',
				props: {},
				styles: {
					maxWidth: 'max-w-7xl',
					padding: 'py-12 px-6',
					margin: 'mx-auto',
				},
				children: [
					{
						id: 'el-sch-testi-heading',
						type: 'heading',
						props: {
							text: 'What Parents & Alumni Say',
							as: 'h2',
						},
						styles: {
							textAlign: 'center',
							margin: 'mb-8',
						},
					},
					{
						id: 'el-sch-testi-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-2',
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-2',
							gap: 'gap-6',
							width: 'w-full',
						},
						children: [
							{
								id: 'el-sch-testi-1',
								type: 'testimonial-card',
								props: {
									quote: 'Our daughter grew remarkably in confidence, curiosity, and critical thinking. The faculty provides attentive guidance and genuine care for every student.',
									author: 'Sarah Jenkins, Ph.D.',
									role: 'Parent of Class of 2025 Graduate',
									avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
							{
								id: 'el-sch-testi-2',
								type: 'testimonial-card',
								props: {
									quote: 'The academic rigour and leadership opportunities prepared me thoroughly for university life. The teachers inspired my passion for computer engineering.',
									author: 'David Harrison',
									role: 'Alumni (Class of 2024, MIT Freshman)',
									avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
								},
								styles: { padding: 'p-6', width: 'w-full' },
							},
						],
					},
				],
			},
			{
				id: 'el-sch-cta',
				type: 'page-cta',
				props: {
					headline: 'Limited Enrollment',
					title: 'Start Your Child’s Journey with Us',
					description: 'Schedule a personalized campus tour and learn more about merit scholarship opportunities.',
					primaryBtnText: 'Start Online Application',
					variant: 'subtle',
				},
				styles: {
					padding: 'py-12 px-6',
					width: 'w-full',
				},
			},
			{
				id: 'el-sch-footer',
				type: 'footer-section',
				props: {
					brandName: 'Horizon Academy',
					tagline: 'Inspiring Minds, Building Character, Shaping the Future.',
					copyright: '© 2026 Horizon Academy. All rights reserved.',
				},
				styles: {
					padding: 'py-12 px-6',
					width: 'w-full',
				},
			},
		],
	},
]
