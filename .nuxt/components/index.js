export { default as ElementsButton } from '../..\\components\\elements\\Button\\Button.vue'
export { default as ElementsMessage } from '../..\\components\\elements\\Message\\Message.vue'
export { default as SharedContainer } from '../..\\components\\shared\\Container\\Container.vue'
export { default as SharedHeader } from '../..\\components\\shared\\Header\\Header.vue'
export { default as SharedHeaderPrimaryHeader } from '../..\\components\\shared\\Header\\PrimaryHeader.vue'
export { default as SharedMenu } from '../..\\components\\shared\\Menu\\Menu.vue'
export { default as SharedMenuPrimaryMenu } from '../..\\components\\shared\\Menu\\PrimaryMenu.vue'
export { default as SharedMenuSecondMenu } from '../..\\components\\shared\\Menu\\SecondMenu.vue'
export { default as SharedContainerContent } from '../..\\components\\shared\\Container\\components\\ContainerContent.vue'
export { default as SharedContainerTop } from '../..\\components\\shared\\Container\\components\\ContainerTop.vue'
export { default as SharedContainerComponentsContainterFooter } from '../..\\components\\shared\\Container\\components\\ContainterFooter.vue'
export { default as SharedHeaderContent } from '../..\\components\\shared\\Header\\components\\HeaderContent.vue'
export { default as SharedHeaderTop } from '../..\\components\\shared\\Header\\components\\HeaderTop.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}