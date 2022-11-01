import { Column, Entity } from 'typeorm';

@Entity('metadata', { schema: 'puntotod_web' })
export class Metadata {
  @Column('varchar', {
    name: 'how_many_specialties',
    nullable: true,
    length: 100,
  })
  howManySpecialties: string | null;

  @Column('varchar', { name: 'specialty_1', nullable: true, length: 100 })
  specialty_1: string | null;

  @Column('varchar', {
    name: 'online_consult_price',
    nullable: true,
    length: 100,
  })
  onlineConsultPrice: string | null;

  @Column('varchar', {
    name: 'online_consult_coin',
    nullable: true,
    length: 100,
  })
  onlineConsultCoin: string | null;

  @Column('varchar', { name: 'booking_price', nullable: true, length: 100 })
  bookingPrice: string | null;

  @Column('varchar', { name: 'booking_coin', nullable: true, length: 100 })
  bookingCoin: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 100 })
  phone: string | null;

  @Column('varchar', { name: 'times_sent', nullable: true, length: 100 })
  timesSent: string | null;

  @Column('varchar', { name: 'puntos', nullable: true, length: 100 })
  puntos: string | null;

  @Column('varchar', { name: 'state', nullable: true, length: 100 })
  state: string | null;

  @Column('varchar', { name: 'city', nullable: true, length: 100 })
  city: string | null;

  @Column('varchar', {
    name: 'count_attention_center',
    nullable: true,
    length: 100,
  })
  countAttentionCenter: string | null;

  @Column('varchar', { name: 'birth_date', nullable: true, length: 100 })
  birthDate: string | null;

  @Column('varchar', { name: 'phone_area_code', nullable: true, length: 100 })
  phoneAreaCode: string | null;

  @Column('varchar', { name: 'check_valetodo', nullable: true, length: 100 })
  checkValetodo: string | null;

  @Column('varchar', {
    name: 'online_office_time_block_monday',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeBlockMonday: string | null;

  @Column('varchar', {
    name: 'check_online_office_monday',
    nullable: true,
    length: 100,
  })
  checkOnlineOfficeMonday: string | null;

  @Column('varchar', {
    name: 'online_office_time_monday_start_1',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeMondayStart_1: string | null;

  @Column('varchar', {
    name: 'online_office_time_monday_end_1',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeMondayEnd_1: string | null;

  @Column('varchar', {
    name: 'online_office_time_block_tuesday',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeBlockTuesday: string | null;

  @Column('varchar', {
    name: 'check_online_office_tuesday',
    nullable: true,
    length: 100,
  })
  checkOnlineOfficeTuesday: string | null;

  @Column('varchar', {
    name: 'online_office_time_tuesday_start_1',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeTuesdayStart_1: string | null;

  @Column('varchar', {
    name: 'online_office_time_tuesday_end_1',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeTuesdayEnd_1: string | null;

  @Column('varchar', {
    name: 'online_office_time_block_wednesday',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeBlockWednesday: string | null;

  @Column('varchar', {
    name: 'check_online_office_wednesday',
    nullable: true,
    length: 100,
  })
  checkOnlineOfficeWednesday: string | null;

  @Column('varchar', {
    name: 'online_office_time_wednesday_start_1',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeWednesdayStart_1: string | null;

  @Column('varchar', {
    name: 'online_office_time_wednesday_end_1',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeWednesdayEnd_1: string | null;

  @Column('varchar', {
    name: 'online_office_time_block_thursday',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeBlockThursday: string | null;

  @Column('varchar', {
    name: 'check_online_office_thursday',
    nullable: true,
    length: 100,
  })
  checkOnlineOfficeThursday: string | null;

  @Column('varchar', {
    name: 'online_office_time_thursday_start_1',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeThursdayStart_1: string | null;

  @Column('varchar', {
    name: 'online_office_time_thursday_end_1',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeThursdayEnd_1: string | null;

  @Column('varchar', {
    name: 'online_office_time_block_friday',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeBlockFriday: string | null;

  @Column('varchar', {
    name: 'check_online_office_friday',
    nullable: true,
    length: 100,
  })
  checkOnlineOfficeFriday: string | null;

  @Column('varchar', {
    name: 'online_office_time_friday_start_1',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeFridayStart_1: string | null;

  @Column('varchar', {
    name: 'online_office_time_friday_end_1',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeFridayEnd_1: string | null;

  @Column('varchar', {
    name: 'online_office_time_block_saturday',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeBlockSaturday: string | null;

  @Column('varchar', {
    name: 'check_online_office_saturday',
    nullable: true,
    length: 100,
  })
  checkOnlineOfficeSaturday: string | null;

  @Column('varchar', {
    name: 'online_office_time_saturday_start_1',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeSaturdayStart_1: string | null;

  @Column('varchar', {
    name: 'online_office_time_saturday_end_1',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeSaturdayEnd_1: string | null;

  @Column('varchar', {
    name: 'online_office_time_block_sunday',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeBlockSunday: string | null;

  @Column('varchar', {
    name: 'check_online_office_sunday',
    nullable: true,
    length: 100,
  })
  checkOnlineOfficeSunday: string | null;

  @Column('varchar', {
    name: 'online_office_time_sunday_start_1',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeSundayStart_1: string | null;

  @Column('varchar', {
    name: 'online_office_time_sunday_end_1',
    nullable: true,
    length: 100,
  })
  onlineOfficeTimeSundayEnd_1: string | null;

  @Column('varchar', {
    name: 'attention_center_name_1',
    nullable: true,
    length: 100,
  })
  attentionCenterName_1: string | null;

  @Column('varchar', {
    name: 'attention_center_adress_1',
    nullable: true,
    length: 100,
  })
  attentionCenterAdress_1: string | null;

  @Column('varchar', {
    name: 'attention_center_address_1',
    nullable: true,
    length: 100,
  })
  attentionCenterAddress_1: string | null;

  @Column('varchar', {
    name: 'attention_center_status_1',
    nullable: true,
    length: 100,
  })
  attentionCenterStatus_1: string | null;

  @Column('varchar', {
    name: 'attention_center_state_1',
    nullable: true,
    length: 100,
  })
  attentionCenterState_1: string | null;

  @Column('varchar', {
    name: 'attention_center_city_1',
    nullable: true,
    length: 100,
  })
  attentionCenterCity_1: string | null;

  @Column('varchar', {
    name: 'attention_center_consult_price_1',
    nullable: true,
    length: 100,
  })
  attentionCenterConsultPrice_1: string | null;

  @Column('varchar', {
    name: 'attention_center_consult_coin_1',
    nullable: true,
    length: 100,
  })
  attentionCenterConsultCoin_1: string | null;

  @Column('varchar', { name: 'show_calendar_1', nullable: true, length: 100 })
  showCalendar_1: string | null;

  @Column('varchar', { name: 'attention_type_1', nullable: true, length: 100 })
  attentionType_1: string | null;

  @Column('varchar', {
    name: 'fixed_time_interval_1',
    nullable: true,
    length: 100,
  })
  fixedTimeInterval_1: string | null;

  @Column('varchar', {
    name: 'time_block_monday_1',
    nullable: true,
    length: 100,
  })
  timeBlockMonday_1: string | null;

  @Column('varchar', {
    name: 'check_fixed_time_monday_1',
    nullable: true,
    length: 100,
  })
  checkFixedTimeMonday_1: string | null;

  @Column('varchar', {
    name: 'time_fixed_time_monday_start_1_1',
    nullable: true,
    length: 100,
  })
  timeFixedTimeMondayStart_1_1: string | null;

  @Column('varchar', {
    name: 'time_fixed_time_monday_end_1_1',
    nullable: true,
    length: 100,
  })
  timeFixedTimeMondayEnd_1_1: string | null;

  @Column('varchar', {
    name: 'time_block_tuesday_1',
    nullable: true,
    length: 100,
  })
  timeBlockTuesday_1: string | null;

  @Column('varchar', {
    name: 'check_fixed_time_tuesday_1',
    nullable: true,
    length: 100,
  })
  checkFixedTimeTuesday_1: string | null;

  @Column('varchar', {
    name: 'time_fixed_time_tuesday_start_1_1',
    nullable: true,
    length: 100,
  })
  timeFixedTimeTuesdayStart_1_1: string | null;

  @Column('varchar', {
    name: 'time_fixed_time_tuesday_end_1_1',
    nullable: true,
    length: 100,
  })
  timeFixedTimeTuesdayEnd_1_1: string | null;

  @Column('varchar', {
    name: 'time_block_wednesday_1',
    nullable: true,
    length: 100,
  })
  timeBlockWednesday_1: string | null;

  @Column('varchar', {
    name: 'check_fixed_time_wednesday_1',
    nullable: true,
    length: 100,
  })
  checkFixedTimeWednesday_1: string | null;

  @Column('varchar', {
    name: 'time_fixed_time_wednesday_start_1_1',
    nullable: true,
    length: 100,
  })
  timeFixedTimeWednesdayStart_1_1: string | null;

  @Column('varchar', {
    name: 'time_fixed_time_wednesday_end_1_1',
    nullable: true,
    length: 100,
  })
  timeFixedTimeWednesdayEnd_1_1: string | null;

  @Column('varchar', {
    name: 'time_block_thursday_1',
    nullable: true,
    length: 100,
  })
  timeBlockThursday_1: string | null;

  @Column('varchar', {
    name: 'check_fixed_time_thursday_1',
    nullable: true,
    length: 100,
  })
  checkFixedTimeThursday_1: string | null;

  @Column('varchar', {
    name: 'time_fixed_time_thursday_start_1_1',
    nullable: true,
    length: 100,
  })
  timeFixedTimeThursdayStart_1_1: string | null;

  @Column('varchar', {
    name: 'time_fixed_time_thursday_end_1_1',
    nullable: true,
    length: 100,
  })
  timeFixedTimeThursdayEnd_1_1: string | null;

  @Column('varchar', {
    name: 'time_block_friday_1',
    nullable: true,
    length: 100,
  })
  timeBlockFriday_1: string | null;

  @Column('varchar', {
    name: 'check_fixed_time_friday_1',
    nullable: true,
    length: 100,
  })
  checkFixedTimeFriday_1: string | null;

  @Column('varchar', {
    name: 'time_fixed_time_friday_start_1_1',
    nullable: true,
    length: 100,
  })
  timeFixedTimeFridayStart_1_1: string | null;

  @Column('varchar', {
    name: 'time_fixed_time_friday_end_1_1',
    nullable: true,
    length: 100,
  })
  timeFixedTimeFridayEnd_1_1: string | null;

  @Column('varchar', {
    name: 'time_block_saturday_1',
    nullable: true,
    length: 100,
  })
  timeBlockSaturday_1: string | null;

  @Column('varchar', {
    name: 'check_fixed_time_saturday_1',
    nullable: true,
    length: 100,
  })
  checkFixedTimeSaturday_1: string | null;

  @Column('varchar', {
    name: 'time_fixed_time_saturday_start_1_1',
    nullable: true,
    length: 100,
  })
  timeFixedTimeSaturdayStart_1_1: string | null;

  @Column('varchar', {
    name: 'time_fixed_time_saturday_end_1_1',
    nullable: true,
    length: 100,
  })
  timeFixedTimeSaturdayEnd_1_1: string | null;

  @Column('varchar', {
    name: 'time_block_sunday_1',
    nullable: true,
    length: 100,
  })
  timeBlockSunday_1: string | null;

  @Column('varchar', {
    name: 'check_fixed_time_sunday_1',
    nullable: true,
    length: 100,
  })
  checkFixedTimeSunday_1: string | null;

  @Column('varchar', {
    name: 'time_fixed_time_sunday_start_1_1',
    nullable: true,
    length: 100,
  })
  timeFixedTimeSundayStart_1_1: string | null;

  @Column('varchar', {
    name: 'time_fixed_time_sunday_end_1_1',
    nullable: true,
    length: 100,
  })
  timeFixedTimeSundayEnd_1_1: string | null;

  @Column('varchar', {
    name: 'check_arrival_order_monday_1',
    nullable: true,
    length: 100,
  })
  checkArrivalOrderMonday_1: string | null;

  @Column('varchar', {
    name: 'how_many_arrival_order_per_monday_1',
    nullable: true,
    length: 100,
  })
  howManyArrivalOrderPerMonday_1: string | null;

  @Column('varchar', {
    name: 'start_time_arrival_order_monday_1',
    nullable: true,
    length: 100,
  })
  startTimeArrivalOrderMonday_1: string | null;

  @Column('varchar', {
    name: 'end_time_arrival_order_monday_1',
    nullable: true,
    length: 100,
  })
  endTimeArrivalOrderMonday_1: string | null;

  @Column('varchar', {
    name: 'check_arrival_order_tuesday_1',
    nullable: true,
    length: 100,
  })
  checkArrivalOrderTuesday_1: string | null;

  @Column('varchar', {
    name: 'how_many_arrival_order_per_tuesday_1',
    nullable: true,
    length: 100,
  })
  howManyArrivalOrderPerTuesday_1: string | null;

  @Column('varchar', {
    name: 'start_time_arrival_order_tuesday_1',
    nullable: true,
    length: 100,
  })
  startTimeArrivalOrderTuesday_1: string | null;

  @Column('varchar', {
    name: 'end_time_arrival_order_tuesday_1',
    nullable: true,
    length: 100,
  })
  endTimeArrivalOrderTuesday_1: string | null;

  @Column('varchar', {
    name: 'check_arrival_order_wednesday_1',
    nullable: true,
    length: 100,
  })
  checkArrivalOrderWednesday_1: string | null;

  @Column('varchar', {
    name: 'how_many_arrival_order_per_wednesday_1',
    nullable: true,
    length: 100,
  })
  howManyArrivalOrderPerWednesday_1: string | null;

  @Column('varchar', {
    name: 'start_time_arrival_order_wednesday_1',
    nullable: true,
    length: 100,
  })
  startTimeArrivalOrderWednesday_1: string | null;

  @Column('varchar', {
    name: 'end_time_arrival_order_wednesday_1',
    nullable: true,
    length: 100,
  })
  endTimeArrivalOrderWednesday_1: string | null;

  @Column('varchar', {
    name: 'check_arrival_order_thursday_1',
    nullable: true,
    length: 100,
  })
  checkArrivalOrderThursday_1: string | null;

  @Column('varchar', {
    name: 'how_many_arrival_order_per_thursday_1',
    nullable: true,
    length: 100,
  })
  howManyArrivalOrderPerThursday_1: string | null;

  @Column('varchar', {
    name: 'start_time_arrival_order_thursday_1',
    nullable: true,
    length: 100,
  })
  startTimeArrivalOrderThursday_1: string | null;

  @Column('varchar', {
    name: 'end_time_arrival_order_thursday_1',
    nullable: true,
    length: 100,
  })
  endTimeArrivalOrderThursday_1: string | null;

  @Column('varchar', {
    name: 'check_arrival_order_friday_1',
    nullable: true,
    length: 100,
  })
  checkArrivalOrderFriday_1: string | null;

  @Column('varchar', {
    name: 'how_many_arrival_order_per_friday_1',
    nullable: true,
    length: 100,
  })
  howManyArrivalOrderPerFriday_1: string | null;

  @Column('varchar', {
    name: 'start_time_arrival_order_friday_1',
    nullable: true,
    length: 100,
  })
  startTimeArrivalOrderFriday_1: string | null;

  @Column('varchar', {
    name: 'end_time_arrival_order_friday_1',
    nullable: true,
    length: 100,
  })
  endTimeArrivalOrderFriday_1: string | null;

  @Column('varchar', {
    name: 'check_arrival_order_saturday_1',
    nullable: true,
    length: 100,
  })
  checkArrivalOrderSaturday_1: string | null;

  @Column('varchar', {
    name: 'how_many_arrival_order_per_saturday_1',
    nullable: true,
    length: 100,
  })
  howManyArrivalOrderPerSaturday_1: string | null;

  @Column('varchar', {
    name: 'start_time_arrival_order_saturday_1',
    nullable: true,
    length: 100,
  })
  startTimeArrivalOrderSaturday_1: string | null;

  @Column('varchar', {
    name: 'end_time_arrival_order_saturday_1',
    nullable: true,
    length: 100,
  })
  endTimeArrivalOrderSaturday_1: string | null;

  @Column('varchar', {
    name: 'check_arrival_order_sunday_1',
    nullable: true,
    length: 100,
  })
  checkArrivalOrderSunday_1: string | null;

  @Column('varchar', {
    name: 'how_many_arrival_order_per_sunday_1',
    nullable: true,
    length: 100,
  })
  howManyArrivalOrderPerSunday_1: string | null;

  @Column('varchar', {
    name: 'start_time_arrival_order_sunday_1',
    nullable: true,
    length: 100,
  })
  startTimeArrivalOrderSunday_1: string | null;

  @Column('varchar', {
    name: 'end_time_arrival_order_sunday_1',
    nullable: true,
    length: 100,
  })
  endTimeArrivalOrderSunday_1: string | null;

  @Column('varchar', { name: 'booking_visit', nullable: true, length: 100 })
  bookingVisit: string | null;

  @Column('varchar', { name: 'gallery_counter', nullable: true, length: 100 })
  galleryCounter: string | null;

  @Column('varchar', {
    name: 'attention_center_name1',
    nullable: true,
    length: 100,
  })
  attentionCenterName1: string | null;

  @Column('varchar', {
    name: 'attention_center_status_',
    nullable: true,
    length: 100,
  })
  attentionCenterStatus: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 100 })
  description: string | null;

  @Column('varchar', {
    name: 'phone_area_code_home',
    nullable: true,
    length: 100,
  })
  phoneAreaCodeHome: string | null;

  @Column('varchar', { name: 'phone_home', nullable: true, length: 100 })
  phoneHome: string | null;

  @Column('varchar', { name: 'public_facebook', nullable: true, length: 100 })
  publicFacebook: string | null;

  @Column('varchar', { name: 'link_facebook', nullable: true, length: 100 })
  linkFacebook: string | null;

  @Column('varchar', { name: 'public_instagram', nullable: true, length: 100 })
  publicInstagram: string | null;

  @Column('bigint', { primary: true, name: 'doctor_id' })
  doctorId: string;

  @Column('varchar', {
    name: 'users_by_chat_session',
    nullable: true,
    length: 100,
  })
  usersByChatSession: string | null;

  @Column('varchar', {
    name: 'consultorio_online_status',
    nullable: true,
    length: 100,
  })
  consultorioOnlineStatus: string | null;

  @Column('varchar', { name: 'max_users_per_day', nullable: true, length: 100 })
  maxUsersPerDay: string | null;

  @Column('varchar', {
    name: 'attention_center_consult_coin_',
    nullable: true,
    length: 100,
  })
  attentionCenterConsultCoin: string | null;

  @Column('varchar', {
    name: 'attention_center_consult_price_',
    nullable: true,
    length: 255,
  })
  attentionCenterConsultPrice: string | null;

  @Column('varchar', { name: 'attention_type_', nullable: true, length: 255 })
  attentionType: string | null;

  @Column('varchar', { name: 'attention_center_', nullable: true, length: 255 })
  attentionCenter: string | null;

  @Column('varchar', { name: 'show_calendar_', nullable: true, length: 255 })
  showCalendar: string | null;

  @Column('varchar', { name: 'specialty_2', nullable: true, length: 255 })
  specialty_2: string | null;

  @Column('varchar', {
    name: 'online_office_time_saturday_end_2',
    nullable: true,
    length: 255,
  })
  onlineOfficeTimeSaturdayEnd_2: string | null;

  @Column('varchar', {
    name: 'online_office_time_saturday_start_2',
    nullable: true,
    length: 255,
  })
  onlineOfficeTimeSaturdayStart_2: string | null;

  @Column('varchar', { name: 'valetodo_value', nullable: true, length: 255 })
  valetodoValue: string | null;

  @Column('varchar', {
    name: 'attention_center_name_',
    nullable: true,
    length: 255,
  })
  attentionCenterName: string | null;

  @Column('varchar', {
    name: 'check_arrival_order_monday_',
    nullable: true,
    length: 255,
  })
  checkArrivalOrderMonday: string | null;

  @Column('varchar', {
    name: 'check_arrival_order_tuesday_',
    nullable: true,
    length: 255,
  })
  checkArrivalOrderTuesday: string | null;

  @Column('varchar', {
    name: 'check_arrival_order_wednesday_',
    nullable: true,
    length: 255,
  })
  checkArrivalOrderWednesday: string | null;

  @Column('varchar', {
    name: 'check_arrival_order_thursday_',
    nullable: true,
    length: 255,
  })
  checkArrivalOrderThursday: string | null;

  @Column('varchar', {
    name: 'check_arrival_order_friday_',
    nullable: true,
    length: 255,
  })
  checkArrivalOrderFriday: string | null;

  @Column('varchar', {
    name: 'check_arrival_order_saturday_',
    nullable: true,
    length: 255,
  })
  checkArrivalOrderSaturday: string | null;

  @Column('varchar', {
    name: 'check_arrival_order_sunday_',
    nullable: true,
    length: 255,
  })
  checkArrivalOrderSunday: string | null;

  @Column('varchar', { name: 'specialty_3', nullable: true, length: 255 })
  specialty_3: string | null;

  @Column('varchar', {
    name: 'attention_center_1',
    nullable: true,
    length: 255,
  })
  attentionCenter_1: string | null;

  @Column('varchar', {
    name: 'check_fixed_time__1',
    nullable: true,
    length: 255,
  })
  checkFixedTime_1: string | null;

  @Column('varchar', {
    name: 'check_fixed_time_D_1',
    nullable: true,
    length: 255,
  })
  checkFixedTimeD_1: string | null;

  @Column('varchar', {
    name: 'check_fixed_time_A_1',
    nullable: true,
    length: 255,
  })
  checkFixedTimeA_1: string | null;

  @Column('varchar', {
    name: 'check_fixed_time_Y_1',
    nullable: true,
    length: 255,
  })
  checkFixedTimeY_1: string | null;

  @Column('varchar', {
    name: 'check_fixed_time_S_1',
    nullable: true,
    length: 255,
  })
  checkFixedTimeS_1: string | null;

  @Column('varchar', {
    name: 'attention_center_name_2',
    nullable: true,
    length: 255,
  })
  attentionCenterName_2: string | null;

  @Column('varchar', {
    name: 'attention_center_status_2',
    nullable: true,
    length: 255,
  })
  attentionCenterStatus_2: string | null;

  @Column('varchar', {
    name: 'attention_center_address_2',
    nullable: true,
    length: 255,
  })
  attentionCenterAddress_2: string | null;

  @Column('varchar', {
    name: 'attention_center_state_2',
    nullable: true,
    length: 255,
  })
  attentionCenterState_2: string | null;

  @Column('varchar', { name: 'specialty_4', nullable: true, length: 255 })
  specialty_4: string | null;

  @Column('varchar', {
    name: 'online_office_time_monday_start_2',
    nullable: true,
    length: 255,
  })
  onlineOfficeTimeMondayStart_2: string | null;

  @Column('varchar', {
    name: 'online_office_time_monday_end_2',
    nullable: true,
    length: 255,
  })
  onlineOfficeTimeMondayEnd_2: string | null;

  @Column('varchar', {
    name: 'online_office_time_tuesday_start_2',
    nullable: true,
    length: 255,
  })
  onlineOfficeTimeTuesdayStart_2: string | null;

  @Column('varchar', {
    name: 'attention_center_city_2',
    nullable: true,
    length: 255,
  })
  attentionCenterCity_2: string | null;

  @Column('varchar', {
    name: 'online_office_time_tuesday_end_2',
    nullable: true,
    length: 255,
  })
  onlineOfficeTimeTuesdayEnd_2: string | null;

  @Column('varchar', {
    name: 'online_office_time_wednesday_start_2',
    nullable: true,
    length: 255,
  })
  onlineOfficeTimeWednesdayStart_2: string | null;

  @Column('varchar', {
    name: 'online_office_time_wednesday_end_2',
    nullable: true,
    length: 255,
  })
  onlineOfficeTimeWednesdayEnd_2: string | null;

  @Column('varchar', {
    name: 'attention_center_consult_price_2',
    nullable: true,
    length: 255,
  })
  attentionCenterConsultPrice_2: string | null;

  @Column('varchar', {
    name: 'attention_center_consult_coin_2',
    nullable: true,
    length: 100,
  })
  attentionCenterConsultCoin_2: string | null;

  @Column('text', { name: 'show_calendar_2', nullable: true })
  showCalendar_2: string | null;

  @Column('text', { name: 'attention_type_2', nullable: true })
  attentionType_2: string | null;

  @Column('text', { name: 'fixed_time_interval_2', nullable: true })
  fixedTimeInterval_2: string | null;

  @Column('text', { name: 'time_block_monday_2', nullable: true })
  timeBlockMonday_2: string | null;

  @Column('text', { name: 'check_fixed_time_monday_2', nullable: true })
  checkFixedTimeMonday_2: string | null;

  @Column('text', { name: 'time_fixed_time_monday_start_2_1', nullable: true })
  timeFixedTimeMondayStart_2_1: string | null;

  @Column('text', {
    name: 'online_office_time_thursday_start_2',
    nullable: true,
  })
  onlineOfficeTimeThursdayStart_2: string | null;

  @Column('text', { name: 'online_office_time_thursday_end_2', nullable: true })
  onlineOfficeTimeThursdayEnd_2: string | null;

  @Column('text', { name: 'time_fixed_time_monday_end_2_1', nullable: true })
  timeFixedTimeMondayEnd_2_1: string | null;

  @Column('text', { name: 'online_office_time_friday_start_2', nullable: true })
  onlineOfficeTimeFridayStart_2: string | null;

  @Column('text', { name: 'online_office_time_friday_end_2', nullable: true })
  onlineOfficeTimeFridayEnd_2: string | null;

  @Column('text', { name: 'time_block_tuesday_2', nullable: true })
  timeBlockTuesday_2: string | null;

  @Column('text', { name: 'check_fixed_time_tuesday_2', nullable: true })
  checkFixedTimeTuesday_2: string | null;

  @Column('text', { name: 'time_fixed_time_tuesday_start_2_1', nullable: true })
  timeFixedTimeTuesdayStart_2_1: string | null;
}
