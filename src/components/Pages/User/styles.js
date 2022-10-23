import styled from 'styled-components'

export const Container = styled.div`
flex: 0.7;
border-right: 1px solid #ddd;
overflow-y: scroll;
box-size: border-box;

&::-webkit-scrollbar{
    display:none;
}

-ms-overflow-style: none;

scrollbar-width: none;
`
export const ContainerReport = styled.div`
width: 80%;
position: relative;
margin: auto;
`

export const Header = styled.header`
h2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ddd;
    margin-top: 5px;
}
`

export const HeaderProfile = styled.header`
  .top {
    display: flex;
    align-items: center;
    padding: 15px;
    color: black;
    width: 100%;
    backdrop-filter: blur(2px);
    border: none;
    background-color: var(--Icon-App-Color);

    .info {
      margin-left: 30px;

      h1 {
        font-size: 20px;
      }

      &__tweets-count {
        font-size: 14px;
        margin-top: 2px;
        color: #888;
      }
    }
  }

  .cover {
    width: 100%;
    background-color: #555;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`
export const ContainerData = styled.div`
  position: relative;

  .tops {
    display: flex;
    justify-content: space-between;
    margin-top: -40px;
    margin-left: 40px;

    .image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid black;
      background-color: #444;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .actions {
      position: relative;
      top: 55px;
      display: flex;

      .action-btn {
        border: 1px solid #777;
        margin-right: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .details {
    color: #888;
    margin-top: 20px;

    .user {
      &__name {
        color: white;
        font-weight: bold;
      }

      &__id {
        margin-top: 2px;
        font-size: 15px;
      }

      &__bio {
        color: white;
        margin-top: 10px;
        a {
          color: var(--theme-color);
          text-decoration: none;
        }
      }

      &__joined {
        display: flex;
        align-items: center;
        margin-top: 15px;
        font-size: 15px;

        &--text {
          margin-left: 5px;
        }
      }

      &__follows {
        font-size: 15px;
        display: flex;
        margin-top: 15px;

        b {
          color: white;
        }

        &__followers {
          margin-left: 20px;
        }
      }

      &__followed-by {
        font-size: 13px;
        margin-top: 15px;
      }
    }
  }
`