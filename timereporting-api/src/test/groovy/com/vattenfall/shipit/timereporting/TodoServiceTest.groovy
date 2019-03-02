package com.vattenfall.shipit.timereporting

import spock.lang.Specification

class TodoServiceTest extends Specification {

    def 'shoud do somethig'() {
        given:
        def value = 5
        when:
        value++
        then:
        6 == value
    }
}
