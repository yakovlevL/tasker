export const getFeatureClasses = () => {
  const canHover = window.matchMedia('(hover: hover)')
  return [canHover && 'can-hover'].filter(Boolean).join(' ')
}

export const addFeatureClasses = (el: any) => {
  el.className = getFeatureClasses()
}
