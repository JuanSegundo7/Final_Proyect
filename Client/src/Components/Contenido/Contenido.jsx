import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCoffees } from '../../redux/Actions/Actions';
import { Card } from '../Card/Card'
import './Contenido.css'

export default function Contenido() {
    const dispatch = useDispatch();
    const allCoffees = useSelector((state) => state.allCoffees);
  
    useEffect(() => {
      dispatch(getCoffees());
    }, [dispatch]);

  return (
    <div className='contenido'>
        <section id="Products">
            <div className='filters'>
                <div className='menuFilters'>
                    <div>
                        <select>
                            <option>A-Z</option>
                            <option>Z-A</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>Min</option>
                            <option>Max</option>
                        </select>

                    </div>
                    <div>
                        <select>
                            <option>Category</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>Mas Vendidos</option>
                        </select>
                    </div>
                </div>
            </div>
      <div className="cardHome">
        {allCoffees.length &&
          allCoffees.map((cardCoffe) => {
            return (
              <div key={cardCoffe._id}>
                <Card
                  key={cardCoffe._id}
                  _id={cardCoffe._id}
                  name={cardCoffe.name}
                  origin={cardCoffe.origin}
                  type={cardCoffe.type}
                />
              </div>
            );
          })}
      </div>
    </section>
    </div>
  )
}
