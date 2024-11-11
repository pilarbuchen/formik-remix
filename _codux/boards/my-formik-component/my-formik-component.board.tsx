import { createBoard } from '@wixc3/react-board';
import { MyFormikComponent } from '../../../src/components/my-formik-component/my-formik-component';

export default createBoard({
    name: 'MyFormikComponent',
    Board: () => <MyFormikComponent />,
});
