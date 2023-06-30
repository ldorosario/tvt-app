export default class TokenStorage {
  setTokenId(tokenId: string) {
    localStorage.setItem("tokenId", tokenId);
  }
  getTokenId() {
    return localStorage.getItem("tokenId");
  }

  realToken() {
    return "3b0efece-ff8b-4b49-a3b0-cdebf15b7b55";
  }
}
