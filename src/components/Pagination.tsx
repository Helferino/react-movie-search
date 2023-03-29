import { useMemo } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

interface Props {
  total: number;
  perPage: number;
  page: number;
  loading: boolean;
  onChange: (nextPage: number) => void;
}

const Pagination = (props: Props) => {

  const totalPages = useMemo(() => Math.ceil(props.total / props.perPage), [props.total, props.perPage])

  const changePage = (next?: boolean) => {
    const nextPage = next ? props.page + 1 : props.page - 1
    props.onChange(Math.max(Math.min(nextPage, totalPages), 1))
  }

  return (
    <div className="pagination">
      <button disabled={props.loading || props.page <= 1} onClick={() => changePage()}>
        <AiOutlineArrowLeft />
      </button>

      <div className="count">{props.page} / {totalPages}</div>

      <button disabled={props.loading || props.page >= totalPages} onClick={() => changePage(true)}>
        <AiOutlineArrowRight />
      </button>
    </div>
  )
}

export default Pagination;
