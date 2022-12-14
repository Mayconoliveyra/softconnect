import styled from "styled-components";
import { theme } from "../../styles/theme";

const TmenuSC = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  padding: 5px;

  [data-title="h2"] {
    display: flex;
    align-items: flex-end;
    h2 {
      font-family: ${theme.font.family.medium};
      font-size: ${theme.font.sizes.medium};
      margin: 0px;
      padding: 0px;
    }
  }
  [data-title="link"] {
    a {
      border: none;
      background-color: transparent;
      font-size: ${theme.font.sizes.small};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0px 30px 0px 5px;
      svg {
        margin-right: 8px;
        font-size: 28px;
      }
    }
  }

  div:nth-child(2) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    font-size: ${theme.font.sizes.small};
    a,
    button {
      color: ${theme.colors.secondaryColor};
      border: solid 1px ${theme.colors.secondaryColor};
      background-color: ${theme.colors.primaryColor};
      font-family: ${theme.font.family.medium};
      padding: 6px 12px;
      border-radius: 4px;
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 8px;
        font-size: 19px;
      }
    }

    [data-btn="sicronizar"] {
      background-color: ${theme.colors.secondaryColor};
      color: ${theme.colors.primaryColor};
    }
  }
`;

const TableSC = styled.table`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 270px);

  tbody {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    padding: 7px;
    height: 100%;

    tr {
      display: flex;
      margin-bottom: 10px;
      background-color: #fdfdfd;
      box-shadow: 0 0px 5px rgb(0 0 0 / 30%);
      border-radius: 4px;
      padding-left: 12px;
      td {
        height: 55px;
        width: 100%;
        display: flex;
        align-items: center;

        margin: 0px 1%;

        overflow: hidden;
        white-space: nowrap;
      }
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
      width: 5px;
    }
    ::-webkit-scrollbar {
      width: 5px;
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.secondaryColor};
      border-radius: 99px;
    }
  }

  tfoot {
    tr {
      display: flex;
      justify-content: center;
      background-color: #fdfdfd;
      box-shadow: 0 0px 5px rgb(0 0 0 / 20%);
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
      padding: 9px 30px;
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.family.medium};
      td {
        height: 37px;
        width: 100%;
        display: flex;
        align-items: center;
        border-right: 1px solid #d4d4d4;

        padding: 0px 2%;

        overflow: hidden;
        white-space: nowrap;

        &:last-child {
          border-right: none;
        }
      }
    }
  }
`;

const TdDefaultSC = styled.td`
  font-size: ${({ css }) => css.fontSize} !important;
  font-family: ${({ css }) =>
    css.fontWeight ? theme.font.family.bold : ""} !important;
  color: ${({ css }) => css.color} !important;

  padding: ${({ css }) => css.padding} !important;
  margin: ${({ css }) => css.margin} !important;
  border-radius: ${({ css }) => css.borderRadius} !important;
  max-width: ${({ css }) => css.maxWidth}px !important;
  justify-content: ${({ css }) => css.justifyContent} !important;

  div {
    border-radius: 13px;
    height: 25px;
    min-width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ css }) => css.backgroundColor} !important;
  }

  button {
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;

    :hover {
      cursor: pointer;
    }
  }
`;

const TdDescriptionSC = styled.td`
  font-size: ${({ css }) => css.fontSize} !important;
  font-family: ${({ css }) =>
    css.fontWeight ? theme.font.family.bold : ""} !important;
  color: ${({ css }) => css.color} !important;

  padding: ${({ css }) => css.padding} !important;
  margin: ${({ css }) => css.margin} !important;
  border-radius: ${({ css }) => css.borderRadius} !important;
  max-width: ${({ css }) => css.maxWidth}px !important;
  justify-content: ${({ css }) => css.justifyContent} !important;
  div {
    display: flex;
    flex-direction: column;
    span {
      color: #c1c1c1;
      font-size: 0.7rem;
      margin-bottom: 6px;
      font-family: ${theme.font.family.bold};
    }
  }
`;

export const Tmenu = ({ children }) => {
  return <TmenuSC>{children}</TmenuSC>;
};

export const Table = ({ children }) => {
  return <TableSC>{children}</TableSC>;
};

export const TBody = ({ children }) => {
  return <tbody id="scrollBody">{children}</tbody>;
};

export const Tfoot = ({ children }) => {
  return (
    <tfoot>
      <tr>{children}</tr>
    </tfoot>
  );
};

export const TdDefault = ({ children, css = {} }) => {
  const cssDefault = {
    fontSize: css.fontSize ? css.fontSize : "",
    color: css.color ? css.color : "",
    fontWeight: css.fontWeight ? css.fontWeight : "",
    backgroundColor: css.backgroundColor ? css.backgroundColor : "",
    padding: css.padding ? css.padding : "",
    margin: css.margin ? css.margin : "",
    borderRadius: css.borderRadius ? css.borderRadius : "",
    maxWidth: css.maxWidth ? css.maxWidth : "",
    justifyContent: css.justifyContent ? css.justifyContent : "",
  };
  return <TdDefaultSC css={cssDefault}>{children}</TdDefaultSC>;
};

export const TdDescription = ({ descricao, children, css = {} }) => {
  const cssDefault = {
    fontSize: css.fontSize ? css.fontSize : "",
    color: css.color ? css.color : "",
    fontWeight: css.fontWeight ? css.fontWeight : "",
    backgroundColor: css.backgroundColor ? css.backgroundColor : "",
    padding: css.padding ? css.padding : "",
    margin: css.margin ? css.margin : "",
    borderRadius: css.borderRadius ? css.borderRadius : "",
    maxWidth: css.maxWidth ? css.maxWidth : "",
    justifyContent: css.justifyContent ? css.justifyContent : "",
  };
  return (
    <TdDescriptionSC css={cssDefault}>
      <div>
        <span>{descricao}</span>
        {children}
      </div>
    </TdDescriptionSC>
  );
};
