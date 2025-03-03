import {computed, ref} from "vue";
import {defineStore} from "pinia";

export const useUserStore = defineStore('user', () => {
    const user = ref({
        id: 0,
        first_name : "",
        last_name : "",
        email : "",
    });
    const full_name =
        computed(() => user.value?.first_name + " "+ user.value?.last_name);
    const setUser = (usr) => {
        user.value = usr;
    }

    return {user,full_name, setUser}
})