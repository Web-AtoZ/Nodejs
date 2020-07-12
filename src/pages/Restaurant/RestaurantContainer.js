import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import useStores from 'useStores';
import RestaurantListTemplate from 'pages/Restaurant/templates/RestaurantListTemplate';

const RestaurantContainer = observer(() => {
    // 함수형에서 @inject 같은 역할
    const {restaurantStore:{findAll, restaurantList}} = useStores();

    // ComponentDidMount() 역할
    useEffect(() => {
        console.log("왓")
        console.log(restaurantList)
        findAll().catch(e => console.log(e.message));
    /* eslint-disable */
    }, [])

    return (<RestaurantListTemplate restaurantList={restaurantList} />);
})

export default RestaurantContainer;
