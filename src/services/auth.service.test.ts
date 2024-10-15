/*
import { instance } from "../api/axios.api";
import { IResponseUserData, IUser, IUserData } from "../types/types";

export const AuthService = {
    async registration(userData: IUserData): Promise<IResponseUserData | undefined> {
        const { data } = await instance.post<IResponseUserData>('user', userData)
        return data
    },

    async login(userData: IUserData): Promise<IUser | undefined> {
        const { data } = await instance.post<IUser>('auth/login', userData)
        return data

    },

    async getProfile(): Promise<IUser | undefined> {
        const { data } = await instance.get<IUser>('auth/profile')
        if (data) return data
    },
}
*/

import { describe, test, expect } from 'vitest'

import { instance } from '../api/axios.api'

import { IResponseUserData, IUserData } from '../types/types'
import MockAdapter from 'axios-mock-adapter'
import { AuthService } from './auth.service'

describe('auth service', () => {
	test('registration', async () => {
		const userData = {
			email: 'test@test.com',
			password: 'password',
		}

		const mock = new MockAdapter(instance)
		const response: IResponseUserData = {
			token: 'token',
			user: {
				id: 1,
				email: 'test@test.com',
				password: 'password',
				createdAt: '2021-09-01T00:00:00.000Z',
				updatedAt: '2021-09-01T00:00:00.000Z',
			},
		}

		mock.onPost('user', userData).reply(200, response)

		const data = await AuthService.registration(userData)

		expect(data).toEqual(response)
	})

	test('login', async () => {
		const userData: IUserData = {
			email: 'test@test.com',
			password: 'password',
		}

		const mock = new MockAdapter(instance)

		const response: IResponseUserData = {
			token: 'token',
			user: {
				id: 1,
				email: 'test@test.com',
				password: 'password',
				createdAt: '2021-09-01T00:00:00.000Z',
				updatedAt: '2021-09-01T00:00:00.000Z',
			},
		}

		mock.onPost('auth/login', userData).reply(200, response)

		const data = await AuthService.login(userData)

		expect(data).toEqual(response)
	})

	test('getProfile', async () => {
		const mock = new MockAdapter(instance)
		const response: IResponseUserData = {
			token: 'token',
			user: {
				id: 1,
				email: 'test@test.com',
				password: 'password',
				createdAt: '2021-09-01T00:00:00.000Z',
				updatedAt: '2021-09-01T00:00:00.000Z',
			},
		}

		mock.onGet('auth/profile').reply(200, response)

		const data = await AuthService.getProfile()

		expect(data).toEqual(response)
	})
})
