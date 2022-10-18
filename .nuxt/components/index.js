export { default as ComponentsPost } from '../..\\components\\components\\Post\\Post.vue'
export { default as ElementsButton } from '../..\\components\\elements\\Button\\Button.vue'
export { default as ElementsMessage } from '../..\\components\\elements\\Message\\Message.vue'
export { default as SharedFooter } from '../..\\components\\shared\\Footer\\Footer.vue'
export { default as SharedHeader } from '../..\\components\\shared\\Header\\Header.vue'
export { default as SharedPagination } from '../..\\components\\shared\\Pagination\\Pagination.vue'
export { default as SharedMenuCategoryMenu } from '../..\\components\\shared\\Menu\\CategoryMenu.vue'
export { default as SharedMenuFooterMenu } from '../..\\components\\shared\\Menu\\FooterMenu.vue'
export { default as SharedMenuHeaderMenu } from '../..\\components\\shared\\Menu\\HeaderMenu.vue'
export { default as SharedMenu } from '../..\\components\\shared\\Menu\\Menu.vue'
export { default as SharedSection } from '../..\\components\\shared\\Section\\Section.vue'
export { default as SharedFooterContact } from '../..\\components\\shared\\Footer\\components\\FooterContact.vue'
export { default as SharedFooterMenu } from '../..\\components\\shared\\Footer\\components\\FooterMenu.vue'
export { default as SharedHeaderContent } from '../..\\components\\shared\\Header\\components\\HeaderContent.vue'
export { default as SharedHeaderTop } from '../..\\components\\shared\\Header\\components\\HeaderTop.vue'
export { default as SharedSectionFooter } from '../..\\components\\shared\\Section\\components\\SectionFooter.vue'
export { default as SharedSectionComponentsSectionnBlog } from '../..\\components\\shared\\Section\\components\\SectionnBlog.vue'
export { default as SharedSectionTop } from '../..\\components\\shared\\Section\\components\\SectionTop.vue'

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
