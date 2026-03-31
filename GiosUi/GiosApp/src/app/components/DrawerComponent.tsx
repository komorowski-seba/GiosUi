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

/*

// presentation/components/UserDrawer.tsx
import { Drawer } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closeDrawer } from "../../features/ui/uiSlice";

export default function UserDrawer() {
  const dispatch = useAppDispatch();
  const { isOpen, user } = useAppSelector((s) => s.ui);

  return (
    <Drawer open={isOpen} onClose={() => dispatch(closeDrawer())}>
      {user && (
        <>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </>
      )}
    </Drawer>
  );
}

 */