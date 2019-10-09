import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"

import paginationStyles from "./paginationLinks.module.scss"

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1 ? "/blog" : "/page/" + (currentPage - 1).toString()
  const nextPage = "/page/" + (currentPage + 1).toString()
  return (
    <Pagination aria-label="Page navigation example">
      {isFirst ? (
        <PaginationItem disabled className={paginationStyles.item}>
          <PaginationLink
            className={paginationStyles.paginationbtn}
            previous
            href="/blog"
          />
        </PaginationItem>
      ) : (
        <PaginationItem className={paginationStyles.item}>
          <PaginationLink
            className={paginationStyles.paginationbtn}
            previous
            href={previousPage}
          />
        </PaginationItem>
      )}
      {Array.from({ length: numberOfPages }, (_, i) =>
        currentPage === i + 1 ? (
          <PaginationItem
            className={paginationStyles.item}
            active
            key={`page-number${i + 1}`}
          >
            <PaginationLink
              className={paginationStyles.paginationbtn}
              href={`/blog${i === 0 ? "" : "page/" + (i + 1)}`}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ) : (
          <PaginationItem
            className={paginationStyles.item}
            key={`page-number${i + 1}`}
          >
            <PaginationLink
              className={paginationStyles.paginationbtn}
              href={`/${i === 0 ? "blog" : "page/" + (i + 1)}`}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )
      )}
      {isLast ? (
        <PaginationItem className={paginationStyles.item} disabled>
          <PaginationLink
            className={paginationStyles.paginationbtn}
            next
            href={nextPage}
          />
        </PaginationItem>
      ) : (
        <PaginationItem className={paginationStyles.item}>
          <PaginationLink
            className={paginationStyles.paginationbtn}
            next
            href={nextPage}
          />
        </PaginationItem>
      )}
    </Pagination>
  )
}

export default PaginationLinks
