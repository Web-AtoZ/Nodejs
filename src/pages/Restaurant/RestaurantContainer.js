import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import useStores from 'useStores';
import RestaurantListTemplate from 'pages/Restaurant/templates/RestaurantListTemplate';

const RestaurantContainer = observer(() => {
    // 함수형에서 @inject 같은 역할
    const {restaurantStore:{findAll, restaurantList, loadMore}} = useStores();

    // ComponentDidMount() 역할
    useEffect(() => {
        findAll().catch(e => console.log(e.message));
    /* eslint-disable */
    }, [])

    return (<RestaurantListTemplate restaurantList={restaurantList} loadMore={loadMore} />);
})

export default RestaurantContainer;
