import React, {
    Component,
    PropTypes
} from 'react'
import {
	Link
} from 'react-router-dom'
import './Item.scss'

class Item extends Component {
    isEmptyObject(e) {
        let t;
        for (t in e)
            return !1;
        return !0
    }

    render() {
        let data = this.props.list.data
        let area = this.props.list.area
        if (this.isEmptyObject(data) || !area) {
            data = {
                '全部区域': []
            };
            area = '全部区域';
        }
        let li =  data[area].map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/list/detail/${item.id}`}>
                  <div className="ci-name">
                      <span>{item.cinemaName}</span>
                      <span className="k-mode"
                          style={{display: item.showMark === '4K厅' ? 'inline-block' : 'none'}}>
                          4K厅
                      </span>
                      <span className="k-mode"
                          style={{display: item.showMark === 'IMAX厅' ? 'inline-block' : 'none'}}>
                          IMAX厅
                      </span>
                      <span className="k-mode"
                          style={{display: item.showMark === '巨幕厅' ? 'inline-block' : 'none'}}>
                          巨幕厅
                      </span>
                  </div>
                  <p className="ci-address">{item.address}</p>
                  <div className="ci-welfare">
                      <span className="label-mod label-border-blue">座</span>
                      <span className="label-mod label-orange">新人专享</span>
                      <span className="label-mod">¥ 18.8元起</span>
                  </div>
              </Link>
          </li>
          )
        })
        return (
            <ul id="ci-lists">
            { li }
            </ul>
        )
    }
}

Item.propTypes = {
    // cinema: PropTypes.object.isRequired,
}

export default Item