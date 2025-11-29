import { ImageResponse } from '@cf-wasm/og';
import { html } from 'satori-html';
import { createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import Og from '~/components/og.vue';


export default defineEventHandler(async () => {

    const app = createSSRApp({
        render: () => h(Og, { title : 'Welcome to My Image' })
    })

    const data = await renderToString(app)

    return ImageResponse.async(html(data), {
        width: 1200,
        height: 630
    })
})