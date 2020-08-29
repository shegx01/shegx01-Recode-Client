import React from 'react'
import PropTypes from 'prop-types'
export default function HeaderSearchItem ({ resultItem, lastItem }) {
  return (
    <span
      className={lastItem ? 'cursor-pointer px-2 py-1 capitalize hover:text-white hover:bg-grey2 w-full truncate'
        : 'cursor-pointer px-2 py-1 capitalize hover:text-white hover:bg-grey2 w-full truncate border-b border-fg'}
    >
      {resultItem}
    </span>
  )
}

HeaderSearchItem.propTypes = {
  resultItem: PropTypes.string.isRequired,
  lastItem: PropTypes.bool
}
