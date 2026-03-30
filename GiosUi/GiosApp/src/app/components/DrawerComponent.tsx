import { Drawer } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { closeDrawer } from '../../features/ui/uiSlice';

export default function DrawerComponent() {
    const dispatch = useAppDispatch();
    const { isDrawerOpen, item } = useAppSelector((s) => s.ui);

    return (
        <Drawer
            open={isDrawerOpen}
            onClose={() => dispatch(closeDrawer())}
            title="Details"
        >
            {item && (
                <>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                </>
            )}
        </Drawer>
    );
}