import type { ComponentDefinition, ComponentCategory } from '~/types/builder'
import { layoutComponents } from './registry/layout'
import { navigationComponents } from './registry/navigation'
import { elementComponents } from './registry/element'
import { formComponents } from './registry/form'
import { dataComponents } from './registry/data'
import { typographyComponents } from './registry/typography'
import { compoundComponents } from './registry/compound'
import { pageComponents } from './registry/page'

export const COMPONENT_REGISTRY: ComponentDefinition[] = [
	...layoutComponents,
	...navigationComponents,
	...elementComponents,
	...formComponents,
	...dataComponents,
	...typographyComponents,
	...compoundComponents,
	...pageComponents,
]

export const CATEGORIES: { id: ComponentCategory, label: string, icon: string }[] = [
	{ id: 'layout', label: 'Layout', icon: 'lucide:layout' },
	{ id: 'navigation', label: 'Navigation', icon: 'lucide:compass' },
	{ id: 'element', label: 'Elements', icon: 'lucide:box' },
	{ id: 'form', label: 'Forms', icon: 'lucide:file-input' },
	{ id: 'data', label: 'Data & Display', icon: 'lucide:database' },
	{ id: 'typography', label: 'Typography', icon: 'lucide:type' },
	{ id: 'compound', label: 'Compound', icon: 'lucide:layers' },
	{ id: 'page', label: 'Page & Pro', icon: 'lucide:layout-template' },
]

export function getComponentByType(type: string): ComponentDefinition | undefined {
	return COMPONENT_REGISTRY.find(c => c.type === type)
}

export function getComponentsByCategory(category: ComponentCategory): ComponentDefinition[] {
	return COMPONENT_REGISTRY.filter(c => c.category === category)
}

export function useComponentRegistry() {
	return {
		registry: COMPONENT_REGISTRY,
		categories: CATEGORIES,
		getComponentByType,
		getComponentsByCategory,
	}
}
