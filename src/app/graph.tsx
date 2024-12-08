import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const Graph: React.FC = () => {
    const products = useSelector((state: RootState) => state.products.products);
    const product = products[0];

    return (
    <div className='graph'>
        <div className='graph-content'>
        
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', border: '1px solid rgb(246 248 250)',
        fontSize: 'small', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', fontWeight: 'bold', padding: '0.5rem' }}>
            <div style={{ flex: 1 }}>WEEK ENDING</div>
            <div style={{ flex: 1 }}>RETAIL SALES</div>
            <div style={{ flex: 1 }}>WHOLESALE SALES</div>
            <div style={{ flex: 1 }}>UNITS SOLD</div>
            <div style={{ flex: 1 }}>RETAILER MARGIN</div>
        </div>
        
        {product.sales.map((sale, index) => (
            <div key={index} style={{ display: 'flex', borderTop: '1px solid rgb(246 248 250)', padding: '0.5rem' }}>
            <div style={{ flex: 1 }}>{sale.weekEnding}</div>
            <div style={{ flex: 1 }}>{sale.retailSales}</div>
            <div style={{ flex: 1 }}>{sale.wholesaleSales}</div>
            <div style={{ flex: 1 }}>{sale.unitsSold}</div>
            <div style={{ flex: 1 }}>{sale.retailerMargin}</div>
            </div>
        ))}
        </div>

        </div>
    </div>)

}

export default Graph;