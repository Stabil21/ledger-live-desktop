// @flow

import React, { PureComponent } from 'react'
import { translate } from 'react-i18next'
import type { T } from 'types/common'

import Box from 'components/base/Box'
import Text from 'components/base/Text'
import AccountsOrder from './AccountsOrder'

type Props = {
  t: T,
  accountsLength: number,
}

class AccountCardListHeader extends PureComponent<Props> {
  render() {
    const { accountsLength, t } = this.props

    return (
      <Box horizontal alignItems="flex-end">
        <Text color="dark" ff="Museo Sans" fontSize={6}>
          {t('app:dashboard.accounts.title', { count: accountsLength })}
        </Text>
        <Box ml="auto" horizontal flow={1}>
          <AccountsOrder />
        </Box>
      </Box>
    )
  }
}

export default translate()(AccountCardListHeader)
