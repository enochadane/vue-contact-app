<template>
    <div>
        <h3 :key="contact.id" v-for="contact in contacts">
            <contact :contact="contact"/>
        </h3>
    </div>
</template>

<script>
import Contact from './Contact'

export default {
    name: 'Contacts',
    props: ['contacts'],
    components: {
        Contact
    }
}
</script>