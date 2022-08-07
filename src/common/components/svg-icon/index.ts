import SvgIcon from './svg-icon.vue'

const requireAll = (requireContext: any) =>
  requireContext.keys().map(requireContext)
const req = require.context('@/assets/icons', true, /\.svg$/)
requireAll(req)

export default SvgIcon
