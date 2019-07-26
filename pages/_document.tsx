import Document, {
    DocumentContext,
    Head,
    NextScript,
    Main,
} from "next/document"
import { ServerStyleSheet } from "styled-components"

type IProps = {
    styleTags: React.ReactElement[]
}

/**
 * <Document /> and injecting the server side rendered styles into the <head>
 * and also adding the babel-plugin-styled-components 
 * 
 * @see https://github.com/zeit/next.js/tree/master/examples/with-styled-components
 * @see https://github.com/nekochans/redux-next-boilerplate/blob/master/src/pages/_document.tsx
 */
export default class extends Document<IProps> {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
            })

        const initialProps = await Document.getInitialProps(ctx)

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            )
        }
    }

    render() {
        return (
            <html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700"
                        rel="stylesheet"
                    />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}