import React from 'react'
import { useActions, useValues } from 'kea'
import { CardContainer } from 'scenes/ingestion/CardContainer'
import { Avatar, List, Row, Tabs, Typography } from 'antd'

import { Framework } from 'scenes/ingestion/types'
import { ingestionLogic } from 'scenes/ingestion/ingestionLogic'
import {
    clientFrameworks,
    logos,
    mobileFrameworks,
    popularFrameworks,
    webFrameworks,
    frameworkToPlatform,
    API,
} from 'scenes/ingestion/constants'
import './FrameworkPanel2.scss'

const { TabPane } = Tabs
const { Paragraph } = Typography

function FrameworksContainer(frameworks: Record<string, string>, sort?: boolean): JSX.Element {
    const { setPlatform, setFramework } = useActions(ingestionLogic)

    const getDisplayName = (item: Framework | string): string => {
        if (item?.toString() === 'PURE_JS') {
            return 'JAVASCRIPT SDK'
        } else if (item?.toString() === 'AUTOCAPTURE') {
            return 'Auto Capture (JS Snippet)'
        } else if (item?.toString() === 'NODEJS') {
            return 'NODE JS'
        } else {
            return item ? frameworks[item] : ''
        }
    }

    const getDataSource = (sorted?: boolean): string[] => {
        if (sorted) {
            return Object.keys(frameworks).sort((k1, k2) => {
                if (k1 === API) {
                    return 1
                }
                return getDisplayName(k1).toString().localeCompare(getDisplayName(k2).toString())
            }) as (keyof typeof frameworks)[]
        } else {
            return Object.keys(frameworks) as (keyof typeof frameworks)[]
        }
    }

    return (
        <List
            style={{ height: 325, maxHeight: 325, overflowY: 'scroll' }}
            grid={{}}
            size={'large'}
            dataSource={getDataSource(sort) as Framework[]}
            renderItem={(item: Framework) => (
                <List.Item
                    className="selectable-item"
                    data-attr={'select-framework-' + item}
                    key={item}
                    onClick={() => {
                        setPlatform(frameworkToPlatform(item))
                        setFramework(item)
                    }}
                >
                    <div className="framework-container">
                        <div className={'logo-container'}>
                            <Avatar
                                size={64}
                                shape={'square'}
                                className={'logo'}
                                src={item && item in logos ? logos[item] : logos['default']}
                            />
                        </div>
                        <Paragraph className="framework-name" type="secondary" strong>
                            {getDisplayName(item)}
                        </Paragraph>
                    </div>
                </List.Item>
            )}
        />
    )
}

function MenuHeader(): JSX.Element {
    return (
        <Tabs defaultActiveKey="popular">
            <TabPane tab="Most Popular" key="popular">
                {FrameworksContainer(popularFrameworks, false)}
            </TabPane>
            <TabPane tab="Browser" key="browser">
                {FrameworksContainer(clientFrameworks, true)}
            </TabPane>
            <TabPane tab="Server" key="server">
                {FrameworksContainer(webFrameworks, true)}
            </TabPane>
            <TabPane tab="Mobile" key="mobile">
                {FrameworksContainer(mobileFrameworks, true)}
            </TabPane>
            <TabPane tab="All" key="all">
                {FrameworksContainer({ ...clientFrameworks, ...webFrameworks, ...mobileFrameworks }, true)}
            </TabPane>
        </Tabs>
    )
}

export function FrameworkPanel2(): JSX.Element {
    const { setPlatform, setFramework } = useActions(ingestionLogic)
    const { index, totalSteps } = useValues(ingestionLogic)

    return (
        <CardContainer
            index={index}
            totalSteps={totalSteps}
            onBack={() => {
                setPlatform(null)
                setFramework(null)
            }}
        >
            <h1>Welcome to PostHog</h1>
            <h3>
                Choose the framework your app is built in. We'll provide you with snippets that you can easily add to
                your codebase to get started!
            </h3>

            <Row>{MenuHeader()}</Row>
            <Row align="middle" style={{ float: 'right', marginTop: 8 }}>
                Don't see a language/platform/framework here?
                <b style={{ marginLeft: 5 }} className="button-border clickable" onClick={() => setFramework(API)}>
                    Continue with our HTTP API
                </b>
            </Row>
        </CardContainer>
    )
}
