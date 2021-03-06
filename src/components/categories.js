import React from 'react'
import {
    StyledCategoryCard,
    StyledItemsContainer } from './styles/categories'
import { CategoryDeleteButton, } from './buttons'
import { NewItemForm } from './forms/addItem'
import { EditCategoryForm } from './forms/editCategory'
import { ItemCard } from './items'


export const CategoryCard = (props) => {
    const renderItems = () => {
        let items = ''
        console.log(props.items)
        if (props.items) {
            items = props.items.map((item) =>
                <ItemCard key={item.sku.toString()}
                    sku={item.sku}
                    name={item.name}
                    isActive={item.isActive}
                    description={item.description}
                    price={item.price}
                />
            )
        }
        return (
            <StyledItemsContainer>
                <h3>{props.name}</h3>
                <NewItemForm showForm={props.showForm} runFunction={props.runFunction} />
                {items}
            </StyledItemsContainer>
        )
    }

    return (
        <StyledCategoryCard>
            <h2>{props.name}</h2>
            <div className="isActive">
                <div>Active</div>
                {props.isActive &&
                    <div className="active">Yes</div>
                }
                {!props.isActive &&
                    <div className="notActive">No</div>
                }
            </div>
            <div className="buttonsDisplay">
            <CategoryDeleteButton category={props.name} runFunction={props.runFunction}/>
            <EditCategoryForm
                showForm={props.form}
                runFunction={props.runFunction}
                name={props.name}
                isActive={props.isActive}
            />
            </div>
            <div>{renderItems()}</div>
        </StyledCategoryCard>
    )
}