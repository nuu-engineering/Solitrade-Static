import axios from 'axios'
import React from 'react'

// https://github.com/simov/slugify
let charMap = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}')

const factory = () => {
  function replace (string, options) {
    if (typeof string !== 'string') {
      throw new Error('slugify: string argument expected')
    }

    let localOptions = (typeof options === 'string')
      ? { replacement: options }
      : options || {}

    const slug = string.split('')
      .reduce((result, ch) => (
        result + (charMap[ch] || ch)
          // allowed
          .replace(localOptions.remove || /[^\w\s$*_+~.()'"!\-:@]/g, '')
      ), '')
      // trim leading/trailing spaces
      .trim()
      // convert spaces
      .replace(/[-\s]+/g, localOptions.replacement || '-')

    return localOptions.lower ? slug.toLowerCase() : slug
  }

  replace.extend = function(customMap) {
    for (var key in customMap) {
      charMap[key] = customMap[key]
    }
  }

  return replace
}

const slugify = factory()


export default {
  // siteRoot: 'https://solitrade.netlify.com/',
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Solitrade Group" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://solitrade.netlify.com/" />
        <meta property="og:image" content="https://solitrade.netlify.com/static/logo.e70ee3ee.png" />
        <meta property="og:description" content="Solitrade Group" />
        <meta property="og:site_name" content="Solitrade" />
        <meta property="og:locale" content="es-MX" />
        <meta property="fb:admins" content="" />
        <meta property="fb:app_id" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        {children}
      </Body>
    </Html>
  ),
  getSiteData: () => ({
    title: 'Solitrade',
    lastBuilt: Date.now(),
  }),
  getRoutes: async () => {
    const { data: events } = await axios.get('https://sales.solitrade.com/json')
    // const { data: brochures } = await axios.get('https://sales.solitrade.com/brochures_json')
    let brochures = []
    let brochuresNames = []
    await axios.get('https://sales.solitrade.com/brochures_json').then(res => {
      const { data = {} } = res
      brochures = data
      brochuresNames = brochures.brochures.map(bro => bro.name).reduce(
        (x, y) => x.includes(y) ? x : [...x, y], [])
    }).catch(err => console.log(err))
    // console.log(events)
    // console.log({ brochuresNames, slugs: brochuresNames.map(s => slugify(s, { lower: true })) })
    return [
      {
        path: '/',
        component: 'src/containers/en/Index',
        children: [
          {
            path: '/contact',
            component: 'src/containers/en/ContactUs',
          },
          {
            path: '/products',
            component: 'src/containers/en/Products',
          },
          {
            path: '/community',
            component: 'src/containers/en/Community',
          },
          {
            path: '/about',
            component: 'src/containers/en/AboutUs',
          },
          {
            path: '/success',
            component: 'src/containers/en/Success',
          },
          {
            path: '/events',
            component: 'src/containers/en/Events',
            getData: () => ({
              events,
            }),
            children: events.events.map(event => ({
              path: `/${event.name.replace(/\s+/g, '-').toLowerCase()}`,
              // path: `/${event.id}`,
              component: 'src/containers/en/Event',
              getData: () => ({
                event,
              }),
            })),
          },
          {
            path: '/brochures',
            component: 'src/containers/en/Brochures',
            getData: () => ({
              brochuresNames,
            }),
            children: brochuresNames.map(name => ({
              path: `/${slugify(name, { lower: true })}`,
              component: 'src/containers/en/BrochureDetail',
              getData: () => ({
                name,
                brochures: brochures.brochures,
              }),
            })),
          },
        ],
      },
      {
        path: '/es',
        component: 'src/containers/es/Index',
        children: [
          {
            path: '/contact',
            component: 'src/containers/es/ContactUs',
          },
          {
            path: '/products',
            component: 'src/containers/es/Products',
          },
          {
            path: '/community',
            component: 'src/containers/es/Community',
          },
          {
            path: '/about',
            component: 'src/containers/es/AboutUs',
          },
          {
            path: '/events',
            component: 'src/containers/es/Events',
            getData: () => ({
              events,
            }),
            children: events.events.map(event => ({
              path: `/${event.name.replace(/\s+/g, '-').toLowerCase()}`,
              // path: `/${event.id}`,
              component: 'src/containers/es/Event',
              getData: () => ({
                event,
              }),
            })),
          },
          {
            path: '/brochures',
            component: 'src/containers/es/Brochures',
            getData: () => ({
              brochuresNames,
            }),
            children: brochuresNames.map(name => ({
              path: `/${slugify(name, { lower: true })}`,
              component: 'src/containers/es/BrochureDetail',
              getData: () => ({
                name,
                brochures: brochures.brochures,
              }),
            })),
          },
        ],
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
