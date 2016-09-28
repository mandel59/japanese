import React from 'react'

class Footer extends React.Component {
  render () {
    const self = this
    const data = self.props.data

    // <hr className="block mx-auto max-width-4 col-12 border-none bg-navy muted-dark pt1 rounded mb4" />

    return (
      <div className="clearfix bg-yellow" style={{ minHeight: 60 + 'vh' }}>
        <div className="col-12 md-col-8 lg-col-9">
          <div className="bg-blue sm-flex flex-wrap">
            <div className="col-4" lang="en">
              <ul className="list-style-none p0 m0">
              <li><a className="border-none" href={ data.baseurl + '/about' }>About</a></li>
              <li><a className="border-none" href={ data.baseurl + '/contributing' }>Contribute</a></li>
              {/* TODO Add SVGs */}
              <li className="fill-navy"><a href={ 'https://twitter.com/' + data.social.twitter }>@{ data.social.twitter } on Twitter</a></li>
              <li className="fill-navy"><a href={ 'https://twitter.com/' + data.social.github }>@{ data.social.github } on GitHub</a></li>
              </ul>
            </div>
            <div className="col-8">
              <p className="mt0">{ data.description }</p>
              <div className="flex mxn1" lang="en">
                <div className="col-4 px1">
                  <a className="border-none" href={ data.authors['marikotakagi'].url }>{ data.authors['marikotakagi'].name }</a>
                  { data.authors['marikotakagi'].credit }
                </div>
                <div className="col-4 px1">
                  <a className="border-none" href={ data.authors['kennethormandy'].url }>{ data.authors['kennethormandy'].name }</a>
                  { data.authors['kennethormandy'].credit }
                </div>
                <div className="col-4 px1">
                  <h5 className="h5 mt0">Google Fonts team</h5>
                  <ul className="list-style-none m0 p0">
                    <li><a className="border-none" href={ data.authors['davecrossland'].url }>{ data.authors['davecrossland'].name }</a></li>
                    <li><a className="border-none" href={ data.authors['yuinchien'].url }>{ data.authors['yuinchien'].name }</a></li>
                    <li><a className="border-none" href={ data.authors['omerziv'].url }>{ data.authors['omerziv'].name }</a></li>
                    <li><a className="border-none" href={ data.authors['lassefister'].url }>{ data.authors['lassefister'].name }</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer