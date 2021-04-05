import { BaseAction } from '../types';

export type Statistics = {
    championId: number
    game: number
    win: number
    lose: number
    playRate: number
    spells: Record<number, number>
    stats: {
        assists: number
        deaths: number
        doubleKills: number
        goldEarned: number
        kills: number
        pentaKills: number
        quadraKills: number
        totalDamageDealtToChampions: number
        totalDamageTaken: number
        totalHeal: number
        totalMinionsKilled: number
        tripleKills: number
        visionScore: number
        visionWardsBoughtInGame: number
        wardsKilled: number
        wardsPlaced: number
    }
}

export type Entry = {
    freshBlood: boolean
    hotStreak: boolean
    inactive: boolean
    leagueId: string
    leaguePoints: number
    losses: number
    queueType: string
    rank: string
    summonerId: string
    summonerName: string
    tier: string
    veteran: boolean
    wins: number
}

export interface SummonerState {
    detail: {
        Id: string
        accountId: string
        name: string
        profileIconId: number
        puuid: string
        revisionDate: number
        summonerLevel: number
        userId: string
    }

    entries: Entry[]
    statistics: Statistics[]
}

export type SummonerAction = BaseAction
