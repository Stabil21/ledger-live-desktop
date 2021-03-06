// @flow

import React, { PureComponent } from 'react'
import { translate } from 'react-i18next'
import type { T } from 'types/common'

import { i } from 'helpers/staticPath'

import InvertableImg from 'components/InvertableImg'
import Box from 'components/base/Box'
import Space from 'components/base/Space'
import Text from 'components/base/Text'
import TrackPage from 'analytics/TrackPage'
import Connect from './Connect'

type Props = {
  t: T,
  onSuccess: void => void,
}

class ManagerConnect extends PureComponent<Props> {
  render() {
    const { t, onSuccess } = this.props
    return (
      <Box align="center" py={7} selectable>
        <TrackPage category="Manager" name="Genuine Check" />
        <Box align="center" style={{ maxWidth: 460 }}>
          <InvertableImg
            src={i('logos/connectDevice.png')}
            alt="connect your device"
            style={{ marginBottom: 30, maxWidth: 25, width: '100%' }}
          />
          <Text
            ff="Inter|Regular"
            fontSize={7}
            color="palette.text.shade100"
            style={{ marginBottom: 10 }}
          >
            {t('managerv2.device.title')}
          </Text>
          <Text ff="Inter|Light" fontSize={5} color="palette.text.shade60" align="center">
            {t('managerv2.device.desc')}
          </Text>
        </Box>
        <Space of={40} />
        <Connect shouldRenderRetry onSuccess={onSuccess} style={{ width: 400 }} />
      </Box>
    )
  }
}

export default translate()(ManagerConnect)
