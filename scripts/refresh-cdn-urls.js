const tencentcloud = require('tencentcloud-sdk-nodejs')
const { wait } = require('./utils')
require('dotenv').config()
const { TENCENT_SECRET_KEY, TENCENT_SECRET_ID } = process.env

const CdnClient = tencentcloud.cdn.v20180606.Client

const clientConfig = {
  credential: {
    secretId: TENCENT_SECRET_ID,
    secretKey: TENCENT_SECRET_KEY,
  },
  // region: '',
  profile: {
    httpProfile: {
      endpoint: 'cdn.tencentcloudapi.com',
    },
  },
}

const client = new CdnClient(clientConfig)
const params = {
  Paths: ['https://cloudbase.icebreaker.top/'],
  FlushType: 'flush',
}

// PurgePathCache

;(async () => {
  try {
    // 等待戈多
    await wait(2000)
    // Urls : 刷新Cdn，记得要刷新 sw.js service worker !!!
    // const data = await client.PurgeUrlsCache(params)
    const data = await client.PurgePathCache(params)
    console.log(data)
  } catch (err) {
    console.error('error', err)
  }
})()
