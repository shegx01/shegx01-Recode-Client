import React from 'react'
import PropTypes from 'prop-types'
export default function RecodePill (props) {
  const { pillName, isCard } = props
  return (
    <button className={isCard ? 'mx-1 px-1 border border-grey3 capitalize text-fg1 bg-grey2 text-xxs whitespace-no-wrap rounded-sm focus:outline-none hover:bg-grey w-16 truncate' : 'px-2 py-px ml-2 border border-grey3 capitalize text-fg1 bg-grey2 text-xs whitespace-no-wrap rounded-sm focus:outline-none hover:bg-grey'}>
      {pillName}
    </button>
  )
}

RecodePill.propTypes = {
  pillName: PropTypes.string.isRequired,
  isCard: PropTypes.bool
}
