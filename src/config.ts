import dotenv from 'dotenv'

import _ from 'lodash'

const result: dotenv.DotenvConfigOutput = dotenv.config()

let envs: any

if (!('error' in result)) {
    envs = result.parsed
} else {
    envs = {}

    _.each(process.env, (value: any, key: any) => {
        envs[key] = value
    })
}

export default envs
