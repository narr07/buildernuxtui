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
				type: 'hero-section',
				props: {
					badgeText: '🚀 Nuxt 4 & Nuxt UI v4 Ready',
					title: 'Ship Modern Vue Applications 10x Faster',
					subtitle: 'Build polished web interfaces with drag and drop simplicity, powered by accessible Nuxt UI components and instant code generation.',
					primaryBtnText: 'Start Building Free',
					secondaryBtnText: 'View Examples',
					primaryBtnIcon: 'lucide:sparkles',
					secondaryBtnIcon: 'lucide:external-link',
					align: 'center'
				},
				styles: {
					padding: 'py-20 px-6',
					width: 'w-full'
				}
			},
			{
				id: 'el-stat-container',
				type: 'container',
				props: {},
				styles: {
					maxWidth: 'max-w-7xl',
					padding: 'py-8 px-6',
					margin: 'mx-auto'
				},
				children: [
					{
						id: 'el-stat-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-3'
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-3',
							gap: 'gap-6',
							width: 'w-full'
						},
						children: [
							{
								id: 'el-stat-1',
								type: 'stat-card',
								props: {
									title: 'Active Developers',
									value: '120,000+',
									change: '+32.4% this month',
									changeType: 'positive',
									icon: 'lucide:users'
								},
								styles: {
									padding: 'p-6',
									width: 'w-full'
								}
							},
							{
								id: 'el-stat-2',
								type: 'stat-card',
								props: {
									title: 'Components Rendered',
									value: '4.8 Million',
									change: '+99.9% uptime',
									changeType: 'positive',
									icon: 'lucide:cpu'
								},
								styles: {
									padding: 'p-6',
									width: 'w-full'
								}
							},
							{
								id: 'el-stat-3',
								type: 'stat-card',
								props: {
									title: 'Production Deployments',
									value: '95,400',
									change: 'Zero config needed',
									changeType: 'positive',
									icon: 'lucide:cloud-upload'
								},
								styles: {
									padding: 'p-6',
									width: 'w-full'
								}
							}
						]
					}
				]
			},
			{
				id: 'el-feat-container',
				type: 'container',
				props: {},
				styles: {
					maxWidth: 'max-w-7xl',
					padding: 'py-12 px-6',
					margin: 'mx-auto'
				},
				children: [
					{
						id: 'el-feat-heading',
						type: 'heading',
						props: {
							text: 'Engineered for Exceptional Developer Experience',
							level: 'h2',
							gradient: true
						},
						styles: {
							textAlign: 'center',
							margin: 'mb-4'
						}
					},
					{
						id: 'el-feat-sub',
						type: 'paragraph',
						props: {
							text: 'Everything you need to craft responsive, accessible and blazing fast interfaces with Vue 3 and Tailwind CSS v4.',
							size: 'text-lg',
							color: 'muted'
						},
						styles: {
							textAlign: 'center',
							margin: 'mb-10 max-w-2xl mx-auto'
						}
					},
					{
						id: 'el-feat-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-3'
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-3',
							gap: 'gap-6',
							width: 'w-full'
						},
						children: [
							{
								id: 'el-feat-1',
								type: 'feature-card',
								props: {
									title: 'Tailwind CSS v4 Engine',
									description: 'Zero runtime overhead with ultra-fast compilation and custom CSS variable tokens.',
									icon: 'lucide:zap'
								},
								styles: { padding: 'p-6', width: 'w-full' }
							},
							{
								id: 'el-feat-2',
								type: 'feature-card',
								props: {
									title: 'Reka UI Headless Core',
									description: 'Fully WAI-ARIA accessible primitives with keyboard navigation and screen-reader support out of the box.',
									icon: 'lucide:shield-check'
								},
								styles: { padding: 'p-6', width: 'w-full' }
							},
							{
								id: 'el-feat-3',
								type: 'feature-card',
								props: {
									title: 'Production Vue SFC Export',
									description: 'Export clean, readable Vue Single File Components with TypeScript types ready to paste into your Nuxt project.',
									icon: 'lucide:code-2'
								},
								styles: { padding: 'p-6', width: 'w-full' }
							}
						]
					}
				]
			},
			{
				id: 'el-pricing-container',
				type: 'container',
				props: {},
				styles: {
					maxWidth: 'max-w-7xl',
					padding: 'py-16 px-6',
					margin: 'mx-auto'
				},
				children: [
					{
						id: 'el-pricing-heading',
						type: 'heading',
						props: {
							text: 'Flexible Pricing for Every Scale',
							level: 'h2',
							gradient: false
						},
						styles: {
							textAlign: 'center',
							margin: 'mb-4'
						}
					},
					{
						id: 'el-pricing-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-3'
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-3',
							gap: 'gap-6',
							width: 'w-full',
							margin: 'mt-8'
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
									features: '3 Active Projects,Standard Nuxt UI components,Community Discord,Basic code export'
								},
								styles: { padding: 'p-6', width: 'w-full' }
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
									features: 'Unlimited projects,Nuxt 4 code & JSON export,All prebuilt sections,Custom theme designer,Priority GitHub support'
								},
								styles: { padding: 'p-6', width: 'w-full' }
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
									features: 'Unlimited team members,Dedicated design system sync,Custom component registry,SSO & audit logs,Dedicated account manager'
								},
								styles: { padding: 'p-6', width: 'w-full' }
							}
						]
					}
				]
			},
			{
				id: 'el-footer-1',
				type: 'footer-section',
				props: {
					brandName: 'NuxtUI Builder',
					tagline: 'Visual UI builder for Vue 3 and the modern Nuxt ecosystem.',
					copyright: '© 2026 NuxtUI Studio. Built with Nuxt 4 & @nuxt/ui.'
				},
				styles: {
					padding: 'py-12 px-6',
					width: 'w-full'
				}
			}
		]
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
				type: 'hero-section',
				props: {
					badgeText: 'Simple, Transparent Pricing',
					title: 'Invest in Faster Delivery',
					subtitle: 'No hidden fees. Switch or cancel anytime. All plans include full access to component libraries.',
					primaryBtnText: 'Get Started with Free Trial',
					secondaryBtnText: 'Compare Plans',
					primaryBtnIcon: 'lucide:arrow-right',
					secondaryBtnIcon: 'lucide:list-ordered',
					align: 'center'
				},
				styles: {
					padding: 'py-16 px-6',
					width: 'w-full'
				}
			},
			{
				id: 'el-testi-container',
				type: 'container',
				props: {},
				styles: {
					maxWidth: 'max-w-7xl',
					padding: 'py-8 px-6',
					margin: 'mx-auto'
				},
				children: [
					{
						id: 'el-testi-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-2'
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-2',
							gap: 'gap-6',
							width: 'w-full'
						},
						children: [
							{
								id: 'el-testi-1',
								type: 'testimonial-card',
								props: {
									quote: 'The Nuxt UI builder saved us hundreds of engineering hours. We designed our entire dashboard mockup and exported clean Vue code directly!',
									author: 'Alex Rivera',
									role: 'Lead Architect @ DevStudio',
									avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
								},
								styles: { padding: 'p-6', width: 'w-full' }
							},
							{
								id: 'el-testi-2',
								type: 'testimonial-card',
								props: {
									quote: 'Nuxt 4 + Nuxt UI v4 feels so intuitive. Having a visual builder with real-time properties and instant Vue code generation is game-changing.',
									author: 'Marcus Chen',
									role: 'Founder @ StackPulse',
									avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
								},
								styles: { padding: 'p-6', width: 'w-full' }
							}
						]
					}
				]
			}
		]
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
					margin: 'mx-auto'
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
							variant: 'subtle'
						},
						styles: {
							margin: 'mb-6',
							width: 'w-full'
						}
					},
					{
						id: 'el-dash-stat-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-3'
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-3',
							gap: 'gap-6',
							width: 'w-full',
							margin: 'mb-8'
						},
						children: [
							{
								id: 'el-d-stat-1',
								type: 'stat-card',
								props: {
									title: 'Monthly Recurring Revenue',
									value: '$84,230',
									change: '+14.5% vs last month',
									changeType: 'positive',
									icon: 'lucide:dollar-sign'
								},
								styles: { padding: 'p-5', width: 'w-full' }
							},
							{
								id: 'el-d-stat-2',
								type: 'stat-card',
								props: {
									title: 'API Request Volume',
									value: '12.4M reqs',
									change: '+5.2% average load',
									changeType: 'positive',
									icon: 'lucide:activity'
								},
								styles: { padding: 'p-5', width: 'w-full' }
							},
							{
								id: 'el-d-stat-3',
								type: 'stat-card',
								props: {
									title: 'Conversion Rate',
									value: '4.82%',
									change: '+0.6% improvement',
									changeType: 'positive',
									icon: 'lucide:target'
								},
								styles: { padding: 'p-5', width: 'w-full' }
							}
						]
					},
					{
						id: 'el-dash-card-grid',
						type: 'grid',
						props: {
							gridCols: 'grid-cols-1 md:grid-cols-2'
						},
						styles: {
							display: 'grid',
							gridCols: 'grid-cols-1 md:grid-cols-2',
							gap: 'gap-6',
							width: 'w-full'
						},
						children: [
							{
								id: 'el-d-card-1',
								type: 'card',
								props: {
									headerText: 'Quick Configuration',
									showHeader: true,
									variant: 'outline'
								},
								styles: { padding: 'p-6', width: 'w-full' },
								children: [
									{
										id: 'el-d-switch-1',
										type: 'switch',
										props: {
											label: 'Automatic CDN Caching',
											description: 'Cache static assets at global edge locations',
											checked: true,
											color: 'primary'
										},
										styles: { margin: 'mb-4' }
									},
									{
										id: 'el-d-slider-1',
										type: 'slider',
										props: {
											value: 80,
											color: 'primary'
										},
										styles: { margin: 'mb-4', width: 'w-full' }
									},
									{
										id: 'el-d-btn-1',
										type: 'button',
										props: {
											label: 'Save Configuration',
											color: 'primary',
											variant: 'solid',
											icon: 'lucide:save'
										},
										styles: { margin: 'mt-4' }
									}
								]
							},
							{
								id: 'el-d-card-2',
								type: 'card',
								props: {
									headerText: 'Live Bandwidth Usage',
									showHeader: true,
									variant: 'outline'
								},
								styles: { padding: 'p-6', width: 'w-full' },
								children: [
									{
										id: 'el-d-prog-1',
										type: 'progress',
										props: {
											value: 78,
											status: true,
											color: 'primary'
										},
										styles: { margin: 'mb-6', width: 'w-full' }
									},
									{
										id: 'el-d-para-1',
										type: 'paragraph',
										props: {
											text: '780 GB of 1000 GB used this billing period. Next reset in 6 days.',
											size: 'text-sm',
											color: 'muted'
										},
										styles: { margin: 'mb-4' }
									},
									{
										id: 'el-d-btn-2',
										type: 'button',
										props: {
											label: 'Upgrade Capacity',
											color: 'neutral',
											variant: 'outline',
											icon: 'lucide:arrow-up-right'
										},
										styles: {}
									}
								]
							}
						]
					}
				]
			}
		]
	}
]
