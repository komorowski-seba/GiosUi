import { Drawer } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import type { RootState } from '../stores/store';
import { setDrawerOpen } from '../stores/reducer';
import { GaugeComponent } from './GaugeComponent';

export function DrawerComponent() {
    const isOpen: boolean = useSelector((state: RootState) => state.ui.isDrawerOpen);
    const dispatch = useDispatch();
    
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

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 16
                }}>
                    <GaugeComponent value={72} name="CPU" />
                    <GaugeComponent value={55} name="RAM" />
                    <GaugeComponent value={90} name="Disk" />
                    <GaugeComponent value={40} name="Network" />
                </div>                
                
            </Drawer>
        </>
    );
}