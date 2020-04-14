/** @jsx jsx */
import PropTypes from 'prop-types'
import { Styled, jsx } from 'theme-ui'
import { Grid, Box } from '@theme-ui/components'

import { ORDER_DIRECTION, ORDER_PARAM } from '../../utils/constants'

import Menu from '../Menu'

import SortingImg from '../../images/sorting.svg'

const Sorting = ({
  selectedOrderBy,
  setSelectedOrderBy,
  selectedOrderDirection,
  setSelectedOrderDirection,
  isSortingOpen,
  setIsSortingOpen,
  orderBy,
}) => {
  const menuItems = Object.keys(orderBy).map(order => ({
    text: (
      <Grid
        sx={{
          gridTemplateColumns: 'repeat(2, max-content)',
          justifyContent: 'space-between',
          py: 2,
        }}
      >
        <Styled.p sx={{ color: 'secondary' }}>
          {selectedOrderBy === orderBy[order] && (
            <img src="/dot.svg" sx={{ ml: -4, pr: 2 }} alt="dot" />
          )}
          {order}
        </Styled.p>
        <p
          sx={{
            variant: 'text.small',
            display: 'inline',
            color: 'blackFaded',
            fontWeight: 'body',
            ml: 2,
          }}
        >
          {ORDER_PARAM[orderBy[order]]}
          <img
            src="/arrow-down.png"
            sx={{
              width: '8px',
              height: 'auto',
              ml: 1,
              transform:
                selectedOrderBy === orderBy[order] &&
                selectedOrderDirection === ORDER_DIRECTION.DESC
                  ? 'rotate(180deg)'
                  : 'none',
            }}
            alt="arrow-down"
          />
        </p>
      </Grid>
    ),
    handleSelect: () => {
      if (selectedOrderBy === orderBy[order]) {
        setSelectedOrderDirection(
          selectedOrderDirection === ORDER_DIRECTION.ASC
            ? ORDER_DIRECTION.DESC
            : ORDER_DIRECTION.ASC,
        )
      } else {
        setSelectedOrderBy(orderBy[order])
      }
    },
    delay: 500,
  }))

  return (
    <Menu
      items={menuItems}
      menuStyles={{ width: 'inherit', top: '40px', pl: '40px' }}
      sx={{ justifyContent: 'flex-end' }}
      setOpen={setIsSortingOpen}
    >
      <Box
        sx={{
          py: 2,
          px: isSortingOpen ? 2 : 0,
          backgroundColor: isSortingOpen ? 'secondary' : 'transparent',
        }}
      >
        <SortingImg
          sx={{
            cursor: 'pointer',
            fill: isSortingOpen ? 'white' : 'secondary',
          }}
        />
      </Box>
    </Menu>
  )
}

Sorting.propTypes = {
  selectedOrderBy: PropTypes.string,
  setSelectedOrderBy: PropTypes.func,
  selectedOrderDirection: PropTypes.string,
  setSelectedOrderDirection: PropTypes.func,
  isSortingOpen: PropTypes.bool,
  setIsSortingOpen: PropTypes.func,
  orderBy: PropTypes.any,
}

export default Sorting
