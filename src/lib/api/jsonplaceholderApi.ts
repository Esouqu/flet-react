import { IComment, IPost, IUser } from "../interfaces"

class JsonplaceholderApi {
  public async getPosts(): Promise<IPost[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
  }

  public async getPostById(id: number): Promise<IPost> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    return await response.json();
  }

  public async getComments(postId: number): Promise<IComment[]> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    );
    return await response.json();
  }

  public async getUserById(id: number): Promise<IUser[]> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    return await response.json();
  }

  public async getUsers(): Promise<IUser[]> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users`,
    );
    return await response.json();
  }
}

const jsonplaceholderApi = new JsonplaceholderApi();

export default jsonplaceholderApi;
