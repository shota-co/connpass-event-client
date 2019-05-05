export interface ConnpassEvent {
  event_url: string,
  event_type: string,
  owner_nickname: string,
  series: {
    url: string,
    id: number,
    title: string
  },
  updated_at: Date,
  lat: number,
  started_at: Date,
  hash_tag: string,
  title: string,
  event_id: number,
  lon: string,
  waiting: number,
  limit: number,
  owner_id: number,
  owner_display_name: string,
  description: HTMLElement,
  address: string,
  catch: string,
  accepted: number,
  ended_at: Date,
  place: string
}