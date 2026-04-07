import { Drawer } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import type { RootState } from '../stores/store';
import { setDrawerOpen } from '../stores/reducer';

export function DrawerComponent() {
    const isOpen: boolean = useSelector((state: RootState) => state.ui.isDrawerOpen);
    const dispatch = useDispatch();

    console.log(" ==== >>> drawer: " + isOpen + " ->");
    
    return (
        <>
            <Drawer
                title="Details"
                placement="right"
                open={isOpen}
                onClose={() => dispatch(setDrawerOpen(false))}
                styles={{
                    wrapper: {
                        width: '50vw',
                        transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                    }
                }}
            >
                <p>Treść drawera zajmująca połowę ekranu.</p>
            </Drawer>
        </>
    );
}