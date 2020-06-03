import React from 'react'
import { Composition, Only } from 'atomic-layout'
import Card from '../../atoms/Card/Card'
import Text from '../../atoms/Text/Text'
import Button from '../../atoms/Button/Button'
import Image from '../../atoms/Image/Image'

const templateMobile = `
  thumbnail
  heading
  actions
`

const templateTablet = `
  thumbnail heading
  thumbnail actions
`

const Flat = ({ name, road_address, phone }) => (
    <Card>
        <Composition
            template={templateMobile}
            templateMd={templateTablet}
            templateLg={templateMobile}
            templateColsMdOnly="minmax(100px, 1fr) 1fr"
            padding={15}
            gutter={15}
            gutterLg={25}
        >
            {({ Thumbnail, Heading, Actions }) => (
                <>
                    <Thumbnail>
                        <Image src="" alt={name} />
                    </Thumbnail>
                    <Heading>
                        <h3>{name}</h3>
                        <Text small muted>
                            {road_address} {phone}
                        </Text>
                    </Heading>
                    <Actions flex align="flex-end">
                        <Only from="md" marginRight={10}>
                            <Button />
                        </Only>
                      <Button variant="contained" color="primary">자세히보기</Button>
                    </Actions>
                </>
            )}
        </Composition>
    </Card>
)

export default Flat
