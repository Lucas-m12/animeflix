import axiox from 'axios';

export const Api = axiox.create({
	baseURL: 'https://api.aniapi.com/v1',
	headers: {
		'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzEiLCJuYmYiOjE2NDU0ODYxNTAsImV4cCI6MTY0ODA3ODE1MCwiaWF0IjoxNjQ1NDg2MTUwfQ.-hUkwYo2Xvn5ZqphUHSnLoubpbEHzvJpp4l36hk7JO8'
	}
});