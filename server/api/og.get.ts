import { ImageResponse as VercelOGImageResponse } from '@vercel/og';
import { html } from 'satori-html';


const data = `<div class="flex h-full w-full flex-col items-center justify-center bg-white p-10">
	<div class="text-center text-[60px] font-bold text-black">Welcome to My Site</div>
	<div class="mt-5 text-[30px] text-gray-600">Generated with Nuxt ImageResponse</div>
</div>`;


class ImageResponse extends VercelOGImageResponse {
    constructor(
        data: string,
        options?: ConstructorParameters<typeof VercelOGImageResponse>['1']
    ) {
        const element = html(data);
        super(element, options);
    }
}


export default defineEventHandler(() => {
    return new ImageResponse(data, {
        width: 1200,
        height: 630
    });
})