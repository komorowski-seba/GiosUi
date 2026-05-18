import { Drawer } from 'antd';
import type { RootState } from '../stores/store';
import { GaugeComponent } from './GaugeComponent';
import { useAppStore } from '../store/use-store';

export function DrawerComponent() {
    const isOpen: boolean = useAppStore((state) => state.isOpenModal);
    const setOpen = useAppStore((state) => state.setOpenModal);
    
    return (
        <>
            <Drawer
                title="Details"
                placement="right"
                open={isOpen}
                onClose={() => setOpen(false) }
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