import { fetchFont, ImageResponse, html } from 'og-img';
//import { html } from 'satori-html';


const data = `<div class="flex h-full w-full flex-col items-center justify-center bg-white p-10">
	<div class="text-center text-[60px] font-bold text-black">Welcome to My Site</div>
	<div class="mt-5 text-[30px] text-gray-600">Generated with Nuxt ImageResponse</div>
</div>`

// Use a reliable TTF font URL that works with image generation
const fontUrl = 'https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVc.ttf';

export default defineEventHandler(async () => {
    return new ImageResponse(html(data), {
        width: 1200,
        height: 630,
        fonts: [{
            name: 'Open Sans',
            // Use Open Sans TTF which is well-supported for image generation
            data: await fetchFont(fontUrl),
            weight: 400,
            style: 'normal',
        }]
    })
})