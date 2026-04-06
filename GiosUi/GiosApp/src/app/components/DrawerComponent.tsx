import { Drawer } from 'antd';
import { useSelector } from 'react-redux'
import { RootState } from '../stores'

export default function DrawerComponent() {
    const isOpen: boolean = useSelector((state: RootState) => state.stations.isDrawerOpen);
    const dispatch = useAppDispatch();

    return (
        <Drawer
            open={isDrawerOpen}
            onClose={() => dispatch(setDrawerOpen(false)))}
            title="Details"
        >
            {item && (
                <>
                    <p></p>
                    <p></p>
                </>
            )}
        </Drawer>
    );
}