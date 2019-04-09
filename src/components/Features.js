import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
       <div key={item.text} className="column is-6">
        <section className="section" style={{padding: '3rem 0.5rem',}}>
          <div className="has-text-centered box" style={{padding:'0px', borderRadius: '0px'}}>
            <div
              style={{
                width: '500px',
                display: 'inline',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
              <h1>{item.templateTitle}</h1>
              <p>{item.templateDescription}</p>
              <div
              style={{
                backgroundColor:'#cedadb',
                padding: '8px',
                'overflow-wrap': 'break-word'
              }}
            >
            To get this template, by using 'ask cli'
            <br/><br/>
            <p>{item.templateUrl}</p>
            </div>
            </div>
          </div>
        </section>
       </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      templateTitle: PropTypes.string,
      templateDescription: PropTypes.string,
      templateUrl: PropTypes.string,
    })
  ),
}

export default FeatureGrid
