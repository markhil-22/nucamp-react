import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartner } from './partnersSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const PartnersList = () => {
  const partners = useSelector(selectAllPartner);
  const isLoading = useSelector((state) => state.partners.isLoading);
  const errMsg = useSelector((state) => state.partners.errMsg);

  return isLoading ? (
    <Loading />
  ) : errMsg ? (
    <Error errMsg={errMsg} />
  ) : (
    <Col className='mt-4'>
      {partners.map((partner) => {
        return (
          <div className='d-flex mb-5' key={partner.id}>
            <Partner partner={partner} />
          </div>
        );
      })}
    </Col>
  );
};

export default PartnersList;
